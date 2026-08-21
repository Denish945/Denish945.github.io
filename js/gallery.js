// // ============================================
// // Gallery Lightbox
// // ============================================

// document.addEventListener('DOMContentLoaded', () => {
//     const galleryItems = document.querySelectorAll('.gallery-item');
    
//     if (galleryItems.length === 0) return;

//     // Create lightbox
//     const lightbox = document.createElement('div');
//     lightbox.className = 'lightbox';
//     lightbox.innerHTML = `
//         <button class="lightbox-close">✕</button>
//         <img src="" alt="Project image" />
//     `;
//     document.body.appendChild(lightbox);

//     const lightboxImg = lightbox.querySelector('img');
//     const closeBtn = lightbox.querySelector('.lightbox-close');

//     // Open lightbox on gallery item click
//     galleryItems.forEach(item => {
//         item.addEventListener('click', () => {
//             const fullImage = item.getAttribute('data-full');
//             if (fullImage) {
//                 lightboxImg.src = fullImage;
//                 lightbox.classList.add('open');
//                 document.body.style.overflow = 'hidden';
//             }
//         });
//     });

//     // Close lightbox
//     function closeLightbox() {
//         lightbox.classList.remove('open');
//         document.body.style.overflow = '';
//         lightboxImg.src = '';
//     }

//     closeBtn.addEventListener('click', closeLightbox);
//     lightbox.addEventListener('click', (e) => {
//         if (e.target === lightbox) {
//             closeLightbox();
//         }
//     });

//     document.addEventListener('keydown', (e) => {
//         if (e.key === 'Escape' && lightbox.classList.contains('open')) {
//             closeLightbox();
//         }
//     });
// });
// ============================================
// Gallery Lightbox
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (galleryItems.length === 0) return;

    // Create lightbox
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <button class="lightbox-close">✕</button>
        <img src="" alt="Project image" />
        <div class="lightbox-caption"></div>
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector('img');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const closeBtn = lightbox.querySelector('.lightbox-close');

    // Open lightbox on gallery item click
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            // Get the image source from the img tag (which works)
            const imgElement = item.querySelector('img');
            const caption = item.querySelector('.gallery-caption');
            
            if (imgElement) {
                // Use the src from the img element directly
                // This ensures we use the same path that already works
                const imageSrc = imgElement.getAttribute('src');
                lightboxImg.src = imageSrc;
                lightboxImg.alt = imgElement.getAttribute('alt') || 'Project image';
                
                // Set caption
                if (caption) {
                    lightboxCaption.textContent = caption.textContent;
                    lightboxCaption.style.display = 'block';
                } else {
                    lightboxCaption.style.display = 'none';
                }
                
                lightbox.classList.add('open');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close lightbox
    function closeLightbox() {
        lightbox.classList.remove('open');
        document.body.style.overflow = '';
        lightboxImg.src = '';
        lightboxCaption.textContent = '';
    }

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('open')) {
            closeLightbox();
        }
    });
});