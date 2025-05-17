// Sample music data with banners
const musicData = {
  trending: [
    {
      id: 1,
      title: "Blinding Lights",
      artist: "The Weeknd",
      cover: "https://i.ytimg.com/vi/XwxLwG2_Sxk/sddefault.jpg",
      banner: "https://i.ytimg.com/vi/XwxLwG2_Sxk/sddefault.jpg",
      plays: "2.5M"
    },
    {
      id: 2,
      title: "Save Your Tears",
      artist: "The Weeknd",
      cover: "https://i.scdn.co/image/ab67616d00001e02b1c4b76e23414c9f20242268",
      banner: "https://source.unsplash.com/random/800x300/?popmusic",
      plays: "1.9M"
    },
    {
      id: 3,
      title: "Stay",
      artist: "The Kid LAROI, Justin Bieber",
      cover: "https://i.ytimg.com/vi/uMt12Zh6mhM/maxresdefault.jpg",
      banner: "https://source.unsplash.com/random/800x300/?justinbieber",
      plays: "3.2M"
    },
    {
      id: 4,
      title: "good 4 u",
      artist: "Olivia Rodrigo",
      cover: "https://i.scdn.co/image/ab67616d00001e02e6f407c7f3a0ec98845e4431",
      banner: "https://source.unsplash.com/random/800x300/?oliviarodrigo",
      plays: "2.1M"
    },
    {
      id: 5,
      title: "Levitating",
      artist: "Dua Lipa",
      cover: "https://i1.sndcdn.com/artworks-YL3ua1FAzIzzSk0e-OWj0qw-t1080x1080.jpg",
      banner: "https://source.unsplash.com/random/800x300/?dualipa",
      plays: "1.9M"
    },
    {
      id: 6,
      title: "Montero",
      artist: "Lil Nas X",
      cover: "https://i.scdn.co/image/ab67616d0000b273c90f18c41baca51f1b78529c",
      banner: "https://source.unsplash.com/random/800x300/?lilnasx",
      plays: "2.3M"
    }
  ],
  recent: [
    {
      id: 7,
      title: "Peaches",
      artist: "Justin Bieber",
      cover: "https://i.scdn.co/image/ab67616d00001e02e6f407c7f3a0ec98845e4431",
      banner: "https://source.unsplash.com/random/800x300/?peaches",
      time: "2 days ago"
    },
    {
      id: 8,
      title: "Kiss Me More",
      artist: "Doja Cat ft. SZA",
      cover: "https://i.scdn.co/image/ab67616d00001e02b1c4b76e23414c9f20242268",
      banner: "https://source.unsplash.com/random/800x300/?dojacat",
      time: "1 week ago"
    },
    {
      id: 9,
      title: "Butter",
      artist: "BTS",
      cover: "https://m.media-amazon.com/images/I/61CNdrgaz8L.jpg",
      banner: "https://source.unsplash.com/random/800x300/?bts",
      time: "3 days ago"
    },
    {
      id: 10,
      title: "Don't Start Now",
      artist: "Dua Lipa",
      cover: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
      banner: "https://source.unsplash.com/random/800x300/?dontstartnow",
      time: "5 days ago"
    },
    {
      id: 11,
      title: "Dynamite",
      artist: "BTS",
      cover: "https://m.media-amazon.com/images/M/MV5BZDJiZTExYjAtOWRjNi00OWEyLWI2OWQtMDg0YWRlYWUyNzVmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      banner: "https://source.unsplash.com/random/800x300/?dynamite",
      time: "2 weeks ago"
    },
    {
      id: 12,
      title: "Watermelon Sugar",
      artist: "Harry Styles",
      cover: "https://i.pinimg.com/736x/5f/9c/64/5f9c6420373b6c9438e09f4a54e678e9.jpg",
      banner: "https://source.unsplash.com/random/800x300/?watermelonsugar",
      time: "4 days ago"
    }
  ]
};

// Content data for sidebar navigation
const contentData = {
  home: {
    title: "Home",
    sections: [
      {
        type: "hero",
        title: "Welcome to Melo",
        description: "Your personal music companion. Discover new songs, create playlists, and enjoy your favorite tracks anytime.",
        image: "https://img.freepik.com/premium-vector/colorful-musical-note-art-with-vibrant-splashes-musical-note-black-surrounded_53876-651215.jpg?semt=ais_hybrid&w=740"
      },
      {
        type: "banner",
        title: "Trending Now",
        description: "The hottest tracks everyone is listening to right now",
        image: "https://static.vecteezy.com/system/resources/thumbnails/007/286/713/small_2x/afro-girl-enjoying-music-wearing-sunglasses-and-headphone-banner-vector.jpg",
        items: musicData.trending.slice(0, 3)
      },
      {
        type: "grid",
        title: "Featured Playlists",
        items: [
          { 
            title: "Today's Top Hits", 
            subtitle: "Current chart toppers worldwide", 
            image: "https://img-cdn.publive.online/fit-in/1920x1080/filters:format(webp)/elle-india/media/post_attachments/wp-content/uploads/2023/12/BANNER-IMG-17.png",
            gradient: "linear-gradient(to right, #ff758c, #ff7eb3)"
          },
          { 
            title: "Chill Lounge", 
            subtitle: "Relaxing beats for your day", 
            image: "https://static.vecteezy.com/system/resources/thumbnails/035/079/827/small/lofi-music-for-homework-youtube-thumbnail-editor_template.jpeg?last_updated=1701382188",
            gradient: "linear-gradient(to right, #7f7fd5, #86a8e7)"
          },
          { 
            title: "Workout Energy", 
            subtitle: "Pump up your exercise routine", 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1_6_EJUv2EtkutvcBca7jy5unhfvIpGoEgA&s",
            gradient: "linear-gradient(to right, #a8e063, #56ab2f)"
          },
          { 
            title: "Indie Mix", 
            subtitle: "Fresh independent artists", 
            image: "https://www.shutterstock.com/image-vector/indie-rock-music-vintage-styled-260nw-766220989.jpg",
            gradient: "linear-gradient(to right, #f46b45, #eea849)"
          }
        ]
      },
      {
        type: "list",
        title: "Recently Played",
        items: musicData.recent.slice(0, 4).map(song => ({
          title: song.title,
          subtitle: song.artist,
          image: song.cover,
          banner: song.banner,
          time: song.time
        }))
      }
    ]
  },
  discover: {
    title: "Discover",
    sections: [
      {
        type: "hero",
        title: "Explore New Music",
        description: "Find your next favorite song with our curated collections and recommendations.",
        image: "https://m.media-amazon.com/images/I/61msmVOGR5L.jpg"
      },
      {
        type: "banner",
        title: "New Releases",
        description: "Fresh music added this week",
        image: "https://dynamic.brandcrowd.com/template/preview/design/b28d1588-2690-460e-bf47-1f0ef4869604?v=4&designTemplateVersion=1&size=design-preview-standalone-1x",
        items: [
          { title: "Album of the Week", subtitle: "The New Division" , cover:"https://static1.squarespace.com/static/5f9dc79dad6f4468ae52de14/604545f77fd55a00f82a3575/65d239fe86077c54503bab4f/1708358507227/dr-sotw-sharon-marley-banner.png?format=1500w"},
          { title: "Hot Single", subtitle: "Dua Lipa", cover:"https://img.freepik.com/free-psd/music-banner-design-template_23-2149081198.jpg?semt=ais_hybrid&w=740" },
          { title: "Indie Spotlight", subtitle: "Beach House", cover:"https://thumbs.dreamstime.com/z/indie-music-festival-poster-flyer-template-illustration-musicians-rock-fest-inscription-yellow-background-banner-162411337.jpg" }
        ]
      },
      {
        type: "grid",
        title: "Popular Playlists",
        items: [
          { title: "Today's Top Hits", subtitle: "Global chart toppers", image: "https://pendujatt.com.se/uploads/album/i-wanna-dance-with-somebody.webp" },
          { title: "Chill Lounge", subtitle: "Relaxing beats", image: "https://i.ytimg.com/vi/F9BhjxUMwzc/sddefault.jpg?v=6799e128" },
          { title: "Workout Power", subtitle: "High energy tracks", image: "https://lh3.googleusercontent.com/d7v8NL60-1f0CLkshKdfwWTYTyetP9eqU-aeBKFfHB5VplhxvsYuU_WeBsy-hLV3HSorVnOGNHn6HZIz=w544-h544-l90-rj" },
          { title: "Coffee House", subtitle: "Acoustic vibes", image: "https://c.saavncdn.com/711/All-Glory-Live--English-2020-20200205233859-500x500.jpg" }
        ]
      }
    ]
  },
  library: {
    title: "My Library",
    sections: [
      {
        type: "hero",
        title: "Your Music Collection",
        description: "All your saved songs, albums and artists in one place.",
        image: "https://c.saavncdn.com/228/Lover-English-2019-20190823031817-500x500.jpg"
      },
      {
        type: "grid",
        title: "Your Albums",
        items: [
          { title: "Future Nostalgia", subtitle: "Dua Lipa", image: "https://mir-s3-cdn-cf.behance.net/project_modules/source/2ae575113106917.602177819e01d.png" },
          { title: "Chromatica", subtitle: "Lady Gaga", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1DsqtbPvVVTzF9N8DWpbbHQ2yU44cvSuwGg&s" },
          { title: "Fine Line", subtitle: "Harry Styles", image: "https://i.pinimg.com/736x/25/eb/5f/25eb5fa4852602950d63d1cdc76dbef3.jpg" },
          { title: "Folklore", subtitle: "Taylor Swift", image: "https://www.shutterstock.com/image-photo/sydney-australia-march-05-2024-260nw-2435849189.jpg" }
        ]
      }
    ]
  },
  liked: {
    title: "Liked Songs",
    sections: [
      {
        type: "hero",
        title: "Your Liked Songs",
        description: "All the songs you've loved in one playlist.",
        image: "https://www.shutterstock.com/image-vector/music-display-theme-platform-sample-260nw-2274808159.jpg"
      },
      {
        type: "list",
        title: "Most Played",
        items: [
          { title: "Save Your Tears", subtitle: "The Weeknd", image: "https://i.ytimg.com/vi/3o4ug07qJBI/maxresdefault.jpg", time: "3:35" },
          { title: "Levitating", subtitle: "Dua Lipa", image: "https://i1.sndcdn.com/artworks-orxd3Qu4MvUnj9Wp-zpTayQ-t500x500.jpg", time: "3:23" },
          { title: "Stay", subtitle: "The Kid LAROI, Justin Bieber", image: "https://i.ytimg.com/vi/kTJczUoc26U/maxresdefault.jpg", time: "2:21" },
          { title: "Good 4 U", subtitle: "Olivia Rodrigo", image: "https://i.pinimg.com/736x/11/71/c4/1171c485714ea6110855c32c3001cc2b.jpg", time: "2:58" }
        ]
      }
    ]
  },
  recent: {
    title: "Recently Played",
    sections: [
      {
        type: "hero",
        title: "Your Listening History",
        description: "Pick up where you left off with your recently played tracks.",
        image: "https://c.saavncdn.com/479/Nevertheless-English-2021-20210303160820-500x500.jpg"
      },
      {
        type: "list",
        title: "Today",
        items: musicData.recent.slice(0, 4).map(song => ({
          title: song.title,
          subtitle: song.artist,
          image: song.cover,
          time: song.time
        }))
      }
    ]
  },
  'made-for-you': {
    title: "Made For You",
    sections: [
      {
        type: "hero",
        title: "Your Personal Mixes",
        description: "Music curated just for you, based on your listening habits.",
        image: "https://img.freepik.com/free-psd/music-channel-banner-template_23-2151410674.jpg?semt=ais_hybrid&w=740"
      },
      {
        type: "grid",
        title: "Daily Mixes",
        items: [
          { title: "Daily Mix 1", subtitle: "Pop favorites", image: "https://lasallefalconer.com/wp-content/uploads/2019/02/416F60CC-706B-4732-92BD-774BE6B3454A-COLLAGE-900x900.jpg" },
          { title: "Daily Mix 2", subtitle: "Chill vibes", image: "https://dynamic.brandcrowd.com/template/preview/design/8b7bf748-7162-41ba-aaed-d50a7f862678/eca40497-44e0-43ac-9ef6-ba3c5efe59f7?v=4&designTemplateVersion=1&logoTemplateVersion=3&size=design-preview-standalone-1x" },
          { title: "Daily Mix 3", subtitle: "Workout energy", image: "https://dynamic.brandcrowd.com/template/preview/design/d88583e6-7643-4e8f-85a1-97e0fd301758?v=4&designTemplateVersion=1&size=design-preview-standalone-1x" },
          { title: "Daily Mix 4", subtitle: "Focus flow", image: "https://i.ytimg.com/vi/ar4HzfP3ON0/sddefault.jpg" }
        ]
      }
    ]
  }
};

const playlistData = {
  workout: {
    title: "Workout Mix",
    sections: [
      {
        type: "hero",
        title: "Workout Mix",
        description: "High energy tracks to power through your workout.",
        image: "https://cdn.create.vista.com/downloads/2be0dd7f-06c1-4c5b-a4e3-71ccfef6d6f5_640.jpeg"
      },
      {
        type: "list",
        title: "Tracklist",
        items: [
          { title: "Stronger", subtitle: "Kanye West", image: "https://i.ytimg.com/vi/aBp70SIv-no/maxresdefault.jpg", time: "4:06" },
          { title: "Till I Collapse", subtitle: "Eminem", image: "https://i1.sndcdn.com/artworks-s3WEIHzICABO082S-wVmy1w-t500x500.jpg", time: "4:57" },
          { title: "Can't Hold Us", subtitle: "Macklemore & Ryan Lewis", image: "https://i.ytimg.com/vi/dbevJM-2lcY/maxresdefault.jpg", time: "4:18" },
          { title: "Power", subtitle: "Kanye West", image: "https://i.ytimg.com/vi/iIR8rlPD0aQ/maxresdefault.jpg", time: "4:52" }
        ]
      }
    ]
  }
};

// DOM Elements
const contentArea = document.getElementById('content-area');
const sidebarButtons = document.querySelectorAll('.sidebar-btn');
const playlistItems = document.querySelectorAll('.playlist-item');
const playBtn = document.querySelector('.play-btn');
const likeBtn = document.querySelector('.like-btn');
const progressBar = document.querySelector('.progress-bar');
const progressFill = document.querySelector('.progress-fill');
const volumeSlider = document.querySelector('.volume-slider input');
const songTitle = document.querySelector('.song-title');
const songArtist = document.querySelector('.song-artist');
const songCover = document.querySelector('.song-cover');
const timeCurrent = document.querySelector('.time-current');
const timeTotal = document.querySelector('.time-total');
const languageButton = document.getElementById('languageButton');
const languageDropdown = document.getElementById('languageDropdown');

// Modal Functions
function openModal() {
  document.getElementById('loginModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('loginModal').style.display = 'none';
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
  if (e.target === document.getElementById('loginModal')) {
    closeModal();
  }
});

// Language Dropdown Functionality
languageButton.addEventListener('click', (e) => {
  e.stopPropagation();
  languageDropdown.classList.toggle('show');
  const icon = languageButton.querySelector('.fa-chevron-down');
  if (languageDropdown.classList.contains('show')) {
    icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
  } else {
    icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
  }
});

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.dropdown') && !e.target.closest('.dropdown-content')) {
    languageDropdown.classList.remove('show');
    const icon = languageButton.querySelector('.fa-chevron-up');
    if (icon) {
      icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
    }
  }
});

// Language Selection
const languageOptions = document.querySelectorAll('.language-option input');
languageOptions.forEach(option => {
  option.addEventListener('change', () => {
    const label = option.closest('.language-option');
    label.classList.toggle('selected', option.checked);
  });
});

// Play Song Function
function playSong(song) {
  songTitle.textContent = song.title;
  songArtist.textContent = song.artist;
  songCover.src = song.cover || "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228";
  
  // Update player state
  playBtn.innerHTML = '<i class="fas fa-pause"></i>';
  timeCurrent.textContent = '0:00';
  timeTotal.textContent = '3:45'; // This would be dynamic in a real app
  
  // Simulate progress bar movement
  let progress = 0;
  const interval = setInterval(() => {
    if (progress >= 100) {
      clearInterval(interval);
      playBtn.innerHTML = '<i class="fas fa-play"></i>';
    } else {
      progress += 0.5;
      progressFill.style.width = `${progress}%`;
      const minutes = Math.floor((progress / 100) * 3);
      const seconds = Math.floor(((progress / 100) * 3 * 60) % 60);
      timeCurrent.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    }
  }, 1000);
  
  // Store the interval so we can clear it when needed
  playBtn._progressInterval = interval;
}

// Toggle Play/Pause
playBtn.addEventListener('click', () => {
  const icon = playBtn.querySelector('i');
  if (icon.classList.contains('fa-play')) {
    icon.classList.replace('fa-play', 'fa-pause');
    // Start progress simulation
    let progress = parseFloat(progressFill.style.width) || 0;
    playBtn._progressInterval = setInterval(() => {
      if (progress >= 100) {
        clearInterval(playBtn._progressInterval);
        icon.classList.replace('fa-pause', 'fa-play');
      } else {
        progress += 0.5;
        progressFill.style.width = `${progress}%`;
        const minutes = Math.floor((progress / 100) * 3);
        const seconds = Math.floor(((progress / 100) * 3 * 60) % 60);
        timeCurrent.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
      }
    }, 1000);
  } else {
    icon.classList.replace('fa-pause', 'fa-play');
    // Pause progress simulation
    clearInterval(playBtn._progressInterval);
  }
});

// Toggle Like
likeBtn.addEventListener('click', () => {
  likeBtn.classList.toggle('liked');
  const icon = likeBtn.querySelector('i');
  if (likeBtn.classList.contains('liked')) {
    icon.classList.replace('far', 'fas');
  } else {
    icon.classList.replace('fas', 'far');
  }
});

// Progress Bar Click
progressBar.addEventListener('click', (e) => {
  const rect = progressBar.getBoundingClientRect();
  const pos = (e.clientX - rect.left) / rect.width;
  progressFill.style.width = `${pos * 100}%`;
  const minutes = Math.floor(pos * 3);
  const seconds = Math.floor((pos * 3 * 60) % 60);
  timeCurrent.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
});

// Volume Control
volumeSlider.addEventListener('input', (e) => {
  // In a real app, this would control audio volume
  console.log(`Volume set to ${e.target.value}%`);
});

// Load content for sidebar navigation
function loadContent(section) {
  // Update active button
  sidebarButtons.forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('onclick').includes(section)) {
      btn.classList.add('active');
    }
  });

  // Reset any active playlist items
  playlistItems.forEach(item => {
    item.classList.remove('active');
  });

  // Load content
  const data = contentData[section];
  
  let contentHTML = `<h1 class="page-title">${data.title}</h1>`;
  
  data.sections.forEach((section, index) => {
    if (section.type === "hero") {
      contentHTML += `
        <div class="hero-section">
          <div class="hero-text">
            <h2 class="hero-title">${section.title}</h2>
            <p class="hero-description">${section.description}</p>
            <button class="hero-button" onclick="playSection('${section.title}')">Play Now</button>
          </div>
          <img src="${section.image}" alt="${section.title}" class="hero-image">
        </div>
      `;
    } else if (section.type === "banner") {
      contentHTML += `
        <div class="song-banner">
          <img src="${section.image}" alt="${section.title}">
          <div class="song-banner-content">
            <h2 class="song-banner-title">${section.title}</h2>
            <p class="song-banner-description">${section.description}</p>
          </div>
        </div>
        <div class="content-section">
          <div class="section-header">
            <h2>${section.title}</h2>
            <button class="see-all">See all</button>
          </div>
          <div class="featured-grid">
            ${section.items.map(item => `
              <div class="featured-card" onclick="playSong(${JSON.stringify(item).replace(/"/g, '&quot;')})">
                <div class="card-content">
                <img src="${item.cover}" alt="${item.title}">
                  <h3>${item.title}</h3>
                  <p>${item.subtitle}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else if (section.type === "grid") {
      contentHTML += `
        <div class="content-section">
          <div class="section-header">
            <h2>${section.title}</h2>
            <button class="see-all">See all</button>
          </div>
          <div class="featured-grid">
            ${section.items.map(item => `
              <div class="featured-card" style="${item.gradient ? `background-image: ${item.gradient}` : `background-color: var(--dark-tertiary)`}" onclick="playSong(${JSON.stringify(item).replace(/"/g, '&quot;')})">
                <div class="card-content">
                <img src="${item.image}" alt="${item.title}">
                  <h3>${item.title}</h3>
                  <p>${item.subtitle}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else if (section.type === "list") {
      contentHTML += `
        <div class="content-section">
          <div class="section-header">
            <h2>${section.title}</h2>
            <button class="see-all">See all</button>
          </div>
          <div class="content-card">
            ${section.items.map(item => `
              <div class="recent-item" onclick="playSong(${JSON.stringify(item).replace(/"/g, '&quot;')})">
                <img src="${item.image}" alt="${item.title}">
                <div class="recent-item-info">
                  <div class="recent-item-title">${item.title}</div>
                  <div class="recent-item-artist">${item.subtitle}</div>
                </div>
                <div class="recent-item-time">${item.time}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }
  });

  contentArea.innerHTML = contentHTML;
}

// Load playlist content
function loadPlaylist(playlistId) {
  // Update active playlist
  playlistItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('onclick').includes(playlistId)) {
      item.classList.add('active');
    }
  });

  // Reset any active sidebar buttons
  sidebarButtons.forEach(btn => {
    btn.classList.remove('active');
  });

  // Load playlist content
  const data = playlistData[playlistId];
  
  let contentHTML = `<h1 class="page-title">${data.title}</h1>`;
  
  data.sections.forEach((section, index) => {
    if (section.type === "hero") {
      contentHTML += `
        <div class="hero-section">
          <div class="hero-text">
            <h2 class="hero-title">${section.title}</h2>
            <p class="hero-description">${section.description}</p>
            <button class="hero-button" onclick="playPlaylist('${data.title}')">Play Playlist</button>
          </div>
          <img src="${section.image}" alt="${section.title}" class="hero-image">
        </div>
      `;
    } else if (section.type === "list") {
      contentHTML += `
        <div class="content-section">
          <div class="section-header">
            <h2>${section.title}</h2>
            <button class="see-all">See all</button>
          </div>
          <div class="content-card">
            ${section.items.map(item => `
              <div class="recent-item" onclick="playSong(${JSON.stringify(item).replace(/"/g, '&quot;')})">
                <img src="${item.image}" alt="${item.title}">
                <div class="recent-item-info">
                  <div class="recent-item-title">${item.title}</div>
                  <div class="recent-item-artist">${item.subtitle}</div>
                </div>
                <div class="recent-item-time">${item.time}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }
  });

  contentArea.innerHTML = contentHTML;
}

// Create new playlist
function createNewPlaylist() {
  const playlistName = prompt('Enter playlist name:');
  if (playlistName && playlistName.trim() !== '') {
    const playlistItemsContainer = document.querySelector('.playlist-items');
    const newPlaylist = document.createElement('button');
    newPlaylist.className = 'playlist-item';
    newPlaylist.innerHTML = `
      <i class="fas fa-list-music"></i>
      <span>${playlistName}</span>
    `;
    newPlaylist.onclick = function() {
      loadCustomPlaylist(playlistName);
    };
    playlistItemsContainer.appendChild(newPlaylist);
  }
}

// Load custom playlist
function loadCustomPlaylist(name) {
  // Update active playlist
  playlistItems.forEach(item => {
    item.classList.remove('active');
  });
  
  // Reset any active sidebar buttons
  sidebarButtons.forEach(btn => {
    btn.classList.remove('active');
  });

  contentArea.innerHTML = `
    <h1 class="page-title">${name}</h1>
    <div class="hero-section">
      <div class="hero-text">
        <h2 class="hero-title">${name}</h2>
        <p class="hero-description">Your personal playlist. Add songs to build your collection.</p>
        <button class="hero-button" onclick="playPlaylist('${name}')">Play Playlist</button>
      </div>
      <img src="https://source.unsplash.com/random/300x300/?playlist" alt="${name}" class="hero-image">
    </div>
    <div class="song-banner">
      <img src="https://source.unsplash.com/random/800x300/?music" alt="${name}">
      <div class="song-banner-content">
        <h2 class="song-banner-title">Add to ${name}</h2>
        <p class="song-banner-description">Find songs to add to your playlist</p>
      </div>
    </div>
    <div class="content-section">
      <h2>Add Songs</h2>
      <div class="featured-grid">
        <div class="featured-card" style="background-color: var(--dark-tertiary)" onclick="addToPlaylist('Popular Hits', '${name}')">
          <div class="card-content">
            <h3>Popular Hits</h3>
            <p>Current chart toppers</p>
          </div>
        </div>
        <div class="featured-card" style="background-color: var(--dark-tertiary)" onclick="addToPlaylist('Recommended', '${name}')">
          <div class="card-content">
            <h3>Recommended</h3>
            <p>Based on your taste</p>
          </div>
        </div>
        <div class="featured-card" style="background-color: var(--dark-tertiary)" onclick="addToPlaylist('New Releases', '${name}')">
          <div class="card-content">
            <h3>New Releases</h3>
            <p>Fresh this week</p>
          </div>
        </div>
        <div class="featured-card" style="background-color: var(--dark-tertiary)" onclick="showSearch()">
          <div class="card-content">
            <h3>Search Songs</h3>
            <p>Find specific tracks</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Demo functions
function playSection(title) {
  alert(`Now playing: ${title}`);
}

function playPlaylist(title) {
  alert(`Now playing playlist: ${title}`);
}

function addToPlaylist(collection, playlist) {
  alert(`Added ${collection} to ${playlist}`);
}

function showSearch() {
  alert("Search functionality would appear here");
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
  // Load home content by default
  loadContent('home');
  
  // Set initial player state
  playSong({
    title: "Blinding Lights",
    artist: "The Weeknd",
    cover: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"
  });
});