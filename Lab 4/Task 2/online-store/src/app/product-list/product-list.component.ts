import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { DecimalPipe } from '@angular/common';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor, DecimalPipe],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 15 Pro 128Gb',
      description:
        'Флагманский смартфон с титановым корпусом, мощным чипом A17 Pro и продвинутой камерой. Подходит для игр, фото и повседневных задач.',
      price: 629990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h8d/h20/86300836954142.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hda/h55/86319883091998.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hcd/hf7/86319883124766.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h05/h13/86319883157534.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-seryi-113138184/',
    },
    {
      id: 2,
      name: 'PlayStation 5',
      description:
        'Игровая приставка нового поколения с поддержкой 4K, трассировкой лучей и быстрым SSD. Обеспечивает высокий FPS и реалистичную графику.',
      price: 299990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h02/h59/63948652249118.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/h00/63948657491998.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h20/h34/63948659589150.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h5d/h41/63948661882910.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577/',
    },
    {
      id: 3,
      name: 'Xbox Series S',
      description:
        'Компактная игровая приставка с быстрым SSD и поддержкой игр текущего поколения. Отличный вариант для гейминга в Full HD и QHD.',
      price: 184990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h8b/hf5/63937788182558.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hd7/h4d/63937793064990.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h5c/h98/63937796603934.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h10/h10/63937799716894.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/xbox-series-s-belyi-100793537/',
    },
    {
      id: 4,
      name: 'Apple AirPods Pro (2nd gen)',
      description:
        'Беспроводные наушники с активным шумоподавлением и режимом прозрачности. Обеспечивают глубокий звук и удобную посадку.',
      price: 119990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/hf2/84108189827102.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-gen-102510281/',
    },
    {
      id: 5,
      name: 'Samsung Galaxy A34 8/128Gb',
      description:
        'Смартфон среднего класса с AMOLED‑дисплеем 120 Гц и батареей 5000 мА·ч. Хорошо подходит для повседневного использования и мультимедиа.',
      price: 134990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5a/hbc/68039658991614.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h5a/hbc/68039658991614.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h9e/h7a/68039659057086.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h2b/hb0/68039659122558.jpg',
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a34-8-gb-128-gb-chernyi-109054735/',
    },
    {
      id: 6,
      name: 'Apple MacBook Air 13 M2 256Gb',
      description:
        'Лёгкий и тихий ноутбук на чипе M2 с длительным временем автономной работы. Подходит для учебы, работы и лёгкого монтажа.',
      price: 479990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h65/h0f/64401109176350.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h65/h0f/64401109176350.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h3c/h3b/64401109241822.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h49/hc2/64401109307294.jpg',
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-m2-8-256-gb-seryi-106134267/',
    },
    {
      id: 7,
      name: 'Apple Watch Series 9 45mm',
      description:
        'Умные часы с ярким дисплеем, датчиком сердечного ритма и поддержкой тренировок. Хорошо интегрируются с экосистемой Apple.',
      price: 209990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf9/h17/68606613461022.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf9/h17/68606613461022.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h55/h2b/68606613526494.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h0e/hd3/68606613591966.jpg',
      ],
      link: 'https://kaspi.kz/shop/p/apple-watch-series-9-gps-45mm-chernyi-114651445/',
    },
    {
      id: 8,
      name: 'Xiaomi Robot Vacuum Cleaner',
      description:
        'Робот‑пылесос с лазерной навигацией и поддержкой влажной уборки. Помогает поддерживать чистоту в квартире без лишних усилий.',
      price: 129990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h78/h1a/64422069264414.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h78/h1a/64422069264414.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h43/h76/64422069329886.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hdd/h0c/64422069395358.jpg',
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-robot-vacuum-cleaner-s10-belyi-112881189/',
    },
    {
      id: 9,
      name: 'LG 55\" 4K Smart TV',
      description:
        '55‑дюймовый 4K телевизор с поддержкой HDR и умной платформой. Хороший выбор для фильмов, сериалов и консолей.',
      price: 279990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1f/h35/64356240257054.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1f/h35/64356240257054.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h7c/h86/64356240322526.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h35/h5e/64356240387998.jpg',
      ],
      link: 'https://kaspi.kz/shop/p/lg-55ur78006lk-140-sm-chernyi-112535211/',
    },
    {
      id: 10,
      name: 'Logitech G Pro X Gaming Headset',
      description:
        'Игровая гарнитура с объёмным звуком и съёмным микрофоном. Подходит для киберспорта и длительных игровых сессий.',
      price: 69990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h25/hb4/63886038003742.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h25/hb4/63886038003742.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h7f/h7a/63886038069214.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h32/hb9/63886038134686.jpg',
      ],
      link: 'https://kaspi.kz/shop/p/logitech-g-pro-x-gaming-headset-chernyi-101093786/',
    },
  ];

  openWhatsApp(product: Product) {
    const text = `Check out this product: ${product.link}`;
    const url = 'https://wa.me/?text=' + encodeURIComponent(text);
    window.open(url, '_blank');
  }

  openTelegram(product: Product) {
    const url =
      'https://t.me/share/url?url=' +
      encodeURIComponent(product.link) +
      '&text=' +
      encodeURIComponent(product.name);
    window.open(url, '_blank');
  }
}