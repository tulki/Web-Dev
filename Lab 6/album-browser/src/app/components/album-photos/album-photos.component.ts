import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import { AlbumService } from '../../services/album.service';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  isLoading = false;
  errorMessage = '';
  albumId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? Number(idParam) : NaN;

    if (!id) {
      this.errorMessage = 'Invalid album id.';
      return;
    }

    this.albumId = id;
    this.loadPhotos(id);
  }

  loadPhotos(id: number): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.albumService.getAlbumPhotos(id).subscribe({
      next: (photos) => {
        this.photos = photos;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Failed to load photos', error);
        this.errorMessage = 'Failed to load photos.';
        this.isLoading = false;
      }
    });
  }

  goBack(): void {
    if (this.albumId == null) {
      this.router.navigate(['/albums']);
    } else {
      this.router.navigate(['/albums', this.albumId]);
    }
  }
}