// Sample music data
const musicData = {
  trending: [
    {
      id: 1,
      title: "Blinding Lights",
      artist: "The Weeknd",
      cover: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
      plays: "2.5M"
    },
    {
      id: 2,
      title: "Save Your Tears",
      artist: "The Weeknd",
      cover: "https://i.scdn.co/image/ab67616d00001e02b1c4b76e23414c9f20242268",
      plays: "1.8M"
    },
    {
      id: 3,
      title: "Stay",
      artist: "The Kid LAROI, Justin Bieber",
      cover: "https://i.scdn.co/image/ab67616d00001e026a5b30bb7a0a7c123a8ba364",
      plays: "3.2M"
    },
    {
      id: 4,
      title: "good 4 u",
      artist: "Olivia Rodrigo",
      cover: "https://i.scdn.co/image/ab67616d00001e02e6f407c7f3a0ec98845e4431",
      plays: "2.1M"
    },
    {
      id: 5,
      title: "Levitating",
      artist: "Dua Lipa",
      cover: "https://i.scdn.co/image/ab67616d00001e02e0b60c608586d88251c3470a",
      plays: "1.9M"
    },
    {
      id: 6,
      title: "Montero",
      artist: "Lil Nas X",
      cover: "https://i.scdn.co/image/ab67616d00001e02e0b60c608586d88251c3470a",
      plays: "2.3M"
    }
  ],
  recent: [
    {
      id: 7,
      title: "Peaches",
      artist: "Justin Bieber",
      cover: "https://i.scdn.co/image/ab67616d00001e02e6f407c7f3a0ec98845e4431",
      time: "2 days ago"
    },
    {
      id: 8,
      title: "Kiss Me More",
      artist: "Doja Cat ft. SZA",
      cover: "https://i.scdn.co/image/ab67616d00001e02b1c4b76e23414c9f20242268",
      time: "1 week ago"
    },
    {
      id: 9,
      title: "Butter",
      artist: "BTS",
      cover: "https://i.scdn.co/image/ab67616d00001e026a5b30bb7a0a7c123a8ba364",
      time: "3 days ago"
    },
    {
      id: 10,
      title: "Don't Start Now",
      artist: "Dua Lipa",
      cover: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
      time: "5 days ago"
    },
    {
      id: 11,
      title: "Dynamite",
      artist: "BTS",
      cover: "https://i.scdn.co/image/ab67616d00001e02e0b60c608586d88251c3470a",
      time: "2 weeks ago"
    },
    {
      id: 12,
      title: "Watermelon Sugar",
      artist: "Harry Styles",
      cover: "https://i.scdn.co/image/ab67616d00001e02e6f407c7f3a0ec98845e4431",
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
        title: "Recently Played",
        content: "Your recently played tracks will appear here."
      },
      {
        title: "Recommended For You",
        content: "Personalized recommendations based on your listening history."
      }
    ]
  },
  discover: {
    title: "Discover",
    sections: [
      {
        title: "New Releases",
        content: "Check out the latest music releases from your favorite artists."
      },
      {
        title: "Popular Playlists",
        content: "Explore trending playlists curated by our community."
      },
      {
        title: "Genres & Moods",
        content: "Find music that matches your current mood or favorite genre."
      }
    ]
  },
  library: {
    title: "My Library",
    sections: [
      {
        title: "Your Albums",
        content: "All the albums you've saved in your library."
      },
      {
        title: "Your Artists",
        content: "Artists you follow and frequently listen to."
      },
      {
        title: "Your Songs",
        content: "All the individual songs in your collection."
      }
    ]
  },
  liked: {
    title: "Liked Songs",
    sections: [
      {
        title: "All Liked Songs",
        content: "All the songs you've liked across Harmony."
      },
      {
        title: "Recently Added",
        content: "Songs you've recently added to your liked songs."
      }
    ]
  },
  recent: {
    title: "Recently Played",
    sections: [
      {
        title: "Your Listening History",
        content: "Songs and albums you've recently played."
      },
      {
        title: "Top Plays This Week",
        content: "Your most played tracks this week."
      }
    ]
  },
  'made-for-you': {
    title: "Made For You",
    sections: [
      {
        title: "Daily Mixes",
        content: "Personalized mixes updated daily based on your taste."
      },
      {
        title: "Discover Weekly",
        content: "Your weekly mixtape of fresh music recommendations."
      },
      {
        title: "Release Radar",
        content: "New releases from artists you follow."
      }
    ]
  }
};

const playlistData = {
  workout: {
    title: "Workout Mix",
    sections: [
      {
        title: "High Energy Tracks",
        content: "Songs to keep you motivated during your workout."
      },
      {
        title: "Top Workout Songs",
        content: "Popular workout tracks from various artists."
      }
    ]
  },
  chill: {
    title: "Chill Vibes",
    sections: [
      {
        title: "Relaxing Tunes",
        content: "Calm music to help you unwind."
      },
      {
        title: "Study Focus",
        content: "Instrumental tracks for concentration."
      }
    ]
  },
  roadtrip: {
    title: "Road Trip",
    sections: [
      {
        title: "Travel Essentials",
        content: "The perfect soundtrack for your journey."
      },
      {
        title: "Sing-Along Hits",
        content: "Classic songs everyone knows the words to."
      }
    ]
  }
};

// DOM Elements
const trendingGrid = document.querySelector('.trending-grid');
const recentGrid = document.querySelector('.recent-grid');
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
const contentArea = document.getElementById('content-area');
const sidebarButtons = document.querySelectorAll('.sidebar-btn');
const playlistItems = document.querySelectorAll('.playlist-item');

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

// Dropdown Functionality
const dropdownBtn = document.querySelector('.dropbtn');
const dropdownContent = document.querySelector('.dropdown-content');

dropdownBtn.addEventListener('click', () => {
  dropdownContent.classList.toggle('show');
  const icon = dropdownBtn.querySelector('.fa-chevron-down');
  if (dropdownContent.classList.contains('show')) {
    icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
  } else {
    icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
  }
});

// Close dropdown when clicking outside
window.addEventListener('click', (e) => {
  if (!e.target.matches('.dropbtn') && !e.target.closest('.dropdown-content')) {
    if (dropdownContent.classList.contains('show')) {
      dropdownContent.classList.remove('show');
      const icon = dropdownBtn.querySelector('.fa-chevron-up');
      if (icon) {
        icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
      }
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

// Populate Trending and Recent Sections
function populateMusicGrid() {
  // Clear existing content
  trendingGrid.innerHTML = '';
  recentGrid.innerHTML = '';

  // Add trending cards
  musicData.trending.forEach(song => {
    const card = document.createElement('div');
    card.className = 'trending-card';
    card.innerHTML = `
      <img src="${song.cover}" alt="${song.title}">
      <h3>${song.title}</h3>
      <p>${song.artist} • ${song.plays} plays</p>
    `;
    card.addEventListener('click', () => playSong(song));
    trendingGrid.appendChild(card);
  });

  // Add recent cards
  musicData.recent.forEach(song => {
    const card = document.createElement('div');
    card.className = 'recent-card';
    card.innerHTML = `
      <img src="${song.cover}" alt="${song.title}">
      <h3>${song.title}</h3>
      <p>${song.artist} • ${song.time}</p>
    `;
    card.addEventListener('click', () => playSong(song));
    recentGrid.appendChild(card);
  });
}

// Play Song Function
function playSong(song) {
  songTitle.textContent = song.title;
  songArtist.textContent = song.artist;
  songCover.src = song.cover;
  
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

  // Load content
  const data = contentData[section];
  
  let contentHTML = `
    <section class="featured-section">
      <div class="section-header">
        <h2>${data.title}</h2>
      </div>
  `;
  
  data.sections.forEach((section, index) => {
    contentHTML += `
      <div class="content-section">
        <h3>${section.title}</h3>
        <div class="content-card">
          <p>${section.content}</p>
        </div>
      </div>
    `;
  });

  contentHTML += `</section>`;
  
  // Keep the trending and recent sections
  contentHTML += `
    <section class="trending-section">
      <div class="section-header">
        <h2>Trending Now</h2>
        <button class="see-all">See all</button>
      </div>
      <div class="trending-grid" id="trending-grid"></div>
    </section>
    <section class="recent-section">
      <div class="section-header">
        <h2>Recently Played</h2>
        <button class="see-all">See all</button>
      </div>
      <div class="recent-grid" id="recent-grid"></div>
    </section>
  `;

  contentArea.innerHTML = contentHTML;
  
  // Re-populate the music grids
  populateMusicGrid();
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

  // Load playlist content
  const data = playlistData[playlistId];
  
  let contentHTML = `
    <section class="featured-section">
      <div class="section-header">
        <h2>${data.title}</h2>
      </div>
  `;
  
  data.sections.forEach((section, index) => {
    contentHTML += `
      <div class="content-section">
        <h3>${section.title}</h3>
        <div class="content-card">
          <p>${section.content}</p>
        </div>
      </div>
    `;
  });

  contentHTML += `</section>`;
  
  // Keep the trending and recent sections
  contentHTML += `
    <section class="trending-section">
      <div class="section-header">
        <h2>Trending Now</h2>
        <button class="see-all">See all</button>
      </div>
      <div class="trending-grid" id="trending-grid"></div>
    </section>
    <section class="recent-section">
      <div class="section-header">
        <h2>Recently Played</h2>
        <button class="see-all">See all</button>
      </div>
      <div class="recent-grid" id="recent-grid"></div>
    </section>
  `;

  contentArea.innerHTML = contentHTML;
  
  // Re-populate the music grids
  populateMusicGrid();
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
  
  let contentHTML = `
    <section class="featured-section">
      <div class="section-header">
        <h2>${name}</h2>
      </div>
      <div class="content-section">
        <h3>Your Custom Playlist</h3>
        <div class="content-card">
          <p>This is your custom playlist "${name}". Add songs to build your collection.</p>
          <button class="sidebar-btn" style="margin-top: 10px;" onclick="alert('Search functionality would go here')">
            <i class="fas fa-search"></i>
            <span>Search Songs</span>
          </button>
        </div>
      </div>
    </section>
    <section class="trending-section">
      <div class="section-header">
        <h2>Trending Now</h2>
        <button class="see-all">See all</button>
      </div>
      <div class="trending-grid" id="trending-grid"></div>
    </section>
    <section class="recent-section">
      <div class="section-header">
        <h2>Recently Played</h2>
        <button class="see-all">See all</button>
      </div>
      <div class="recent-grid" id="recent-grid"></div>
    </section>
  `;

  contentArea.innerHTML = contentHTML;
  
  // Re-populate the music grids
  populateMusicGrid();
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
  populateMusicGrid();
  
  // Set initial player state
  playSong(musicData.trending[0]);
  
  // Set home as active by default
  document.querySelector('.sidebar-btn').classList.add('active');
  
  // Close dropdowns when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
      dropdownContent.classList.remove('show');
      const icon = dropdownBtn.querySelector('.fa-chevron-up');
      if (icon) {
        icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
      }
    }
  });
});