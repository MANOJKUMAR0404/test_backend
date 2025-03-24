function runForSmallScreens() {
    
    // Add your code here
    document.querySelector('.menu-btn-mobile').addEventListener('click', function(event) {
        event.stopPropagation();
        // const image2_display = document.querySelector('.right_content');
        const image1_display = document.querySelector('.left_image');
        // const dropdown_menu_1 = document.querySelector('.dropdown-content-mobile');
        
        // image2_display.style.right = image2_display.style.right === '-350px' ? '0px' : '-350px';
        // dropdown_menu_1.style.right = dropdown_menu_1.style.right === '-350px' ? '20px' : '-350px';
        image1_display.style.left = image1_display.style.left === '0px' ? '-350px' : '0px';
    });
    
    document.addEventListener('click', function() {
        const image2_display = document.querySelector('.right_content');
        const image1_display = document.querySelector('.left_content');
        const dropdown_menu_1 = document.querySelector('.dropdown-content-mobile');
        if (image2_display.style.right === '0px') {
            image2_display.style.right = '-350px';
            dropdown_menu_1.style.right = '-350px';
            image1_display.style.left = '0px';
        }
    });
  }
  
  // Check for small screens (e.g., less than or equal to 768px)
  const mediaQuery = window.matchMedia('(max-width: 480px)');
  
  function handleScreenChange(e) {
    if (e.matches) {
      runForSmallScreens();
    }
  }
  
  // Initial check
  handleScreenChange(mediaQuery);
  
  // Listen for changes
  mediaQuery.addEventListener('change', handleScreenChange);
  

