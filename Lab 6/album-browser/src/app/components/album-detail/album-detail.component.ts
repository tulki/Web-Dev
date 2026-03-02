import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  isLoading = false;
  errorMessage = '';
  editedTitle = '';

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

    this.loadAlbum(id);
  }

  loadAlbum(id: number): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.albumService.getAlbum(id).subscribe({
      next: (album) => {
        this.album = album;
        this.editedTitle = album.title;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Failed to load album', error);
        this.errorMessage = 'Failed to load album.';
        this.isLoading = false;
      }
    });
  }

  save(): void {
    if (!this.album) {
      return;
    }

    const updated: Album = { ...this.album, title: this.editedTitle };

    this.albumService.updateAlbum(updated).subscribe({
      next: (result) => {
        this.album = result;
        this.editedTitle = result.title;
        alert('Album title saved (simulated).');
      },
      error: (error) => {
        console.error('Failed to update album', error);
        alert('Failed to save album.');
      }
    });
  }

  viewPhotos(): void {
    if (!this.album) {
      return;
    }
    this.router.navigate(['/albums', this.album.id, 'photos']);
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}