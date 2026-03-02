import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  isLoading = false;
  errorMessage = '';

  constructor(
    private albumService: AlbumService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.albumService.getAlbums().subscribe({
      next: (albums) => {
        this.albums = albums;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Failed to load albums', error);
        this.errorMessage = 'Failed to load albums. Please try again later.';
        this.isLoading = false;
      }
    });
  }

  openAlbum(album: Album): void {
    this.router.navigate(['/albums', album.id]);
  }

  deleteAlbum(album: Album): void {
    const confirmed = confirm(`Delete album "${album.title}"?`);
    if (!confirmed) {
      return;
    }

    this.albumService.deleteAlbum(album.id).subscribe({
      next: () => {
        this.albums = this.albums.filter(a => a.id !== album.id);
      },
      error: (error) => {
        console.error('Failed to delete album', error);
        alert('Failed to delete album. Please try again.');
      }
    });
  }
}