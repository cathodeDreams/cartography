const images = [
    { url: 'https://cdn.midjourney.com/d1157f9c-e813-4c9a-a0f2-9ea4e54f7af9/0_0.png', seed: '44836428' },
    { url: 'https://cdn.midjourney.com/bbb4ea39-bd18-445e-946b-d85c310e396e/0_1.png', seed: '164332467' },
    { url: 'https://cdn.midjourney.com/1e4afe15-23b8-427e-9a97-c6aaed533fd5/0_2.png', seed: '194546125' },
    { url: 'https://cdn.midjourney.com/a2257b37-94d4-4236-869f-ef298b17426e/0_3.png', seed: '216667100' },
    { url: 'https://cdn.midjourney.com/24942549-9078-4c28-ad0c-675c68e6223f/0_2.png', seed: '291880100' },
    { url: 'https://cdn.midjourney.com/86a7eee2-069d-4bb0-9fdf-c93bfefcc4f8/0_2.png', seed: '575879118' },
    { url: 'https://cdn.midjourney.com/6b4d5cb4-0e77-4069-acfe-3a3cfd028d27/0_3.png', seed: '609058242' },
    { url: 'https://cdn.midjourney.com/4139e02b-ddbb-4eea-820f-36d08d845e79/0_3.png', seed: '656067415' },
    { url: 'https://cdn.midjourney.com/0526b9d6-44b4-47bc-b2cf-55663a575ddf/0_1.png', seed: '650500603' },
    { url: 'https://cdn.midjourney.com/715cdccd-9c5e-41a1-b093-61e4be236412/0_3.png', seed: '764597959' },
    { url: 'https://cdn.midjourney.com/fc957333-0a6c-4c0b-8144-f21afa1083a3/0_3.png', seed: '757642333' },
    { url: 'https://cdn.midjourney.com/adcdb783-00a0-441f-b751-40ead6342c98/0_1.png', seed: '785505480' },
    { url: 'https://cdn.midjourney.com/0de36c50-3e8a-4dd2-9f30-b40f78489be9/0_1.png', seed: '809435757' },
    { url: 'https://cdn.midjourney.com/de400d0e-608e-45f1-873f-d3e2930e3bbc/0_3.png', seed: '852680936' },
    { url: 'https://cdn.midjourney.com/0967b654-78b8-41ff-933c-e0214a29cbfb/0_2.png', seed: '931686384' },
    { url: 'https://cdn.midjourney.com/732e4059-2850-41aa-af7d-0670459fde5f/0_1.png', seed: '1051322289' },
    { url: 'https://cdn.midjourney.com/0a759672-b0e6-4185-9c91-db931093730b/0_1.png', seed: '1112438194' },
    { url: 'https://cdn.midjourney.com/786ba8c2-a94b-410b-ae86-d4a9ac1dbb95/0_3.png', seed: '1293965908' },
    { url: 'https://cdn.midjourney.com/ea273ef6-5f15-4e3c-bf61-5efb4b225b52/0_1.png', seed: '1275054892' },
    { url: 'https://cdn.midjourney.com/ba484727-288d-40f0-a7c0-cc509be51eee/0_3.png', seed: '1323499438' },
    { url: 'https://cdn.midjourney.com/43679802-b15a-4acb-a581-b4de0b03cc03/0_0.png', seed: '1392405487' },
    { url: 'https://cdn.midjourney.com/4d539c93-7551-4889-85e7-4a72ff8cd4d1/0_0.png', seed: '1631641171' },
    { url: 'https://cdn.midjourney.com/ced6d9c9-3b7e-4103-ade5-3fd8e57d9f7f/0_2.png', seed: '1637450595' },
    { url: 'https://cdn.midjourney.com/9ccb26ce-2231-4201-95c1-fff5bfd8674c/0_3.png', seed: '1724608600' },
    { url: 'https://cdn.midjourney.com/f13c6cbd-8483-46c9-8252-d86a5d73c995/0_2.png', seed: '1965755626' },
    { url: 'https://cdn.midjourney.com/2f6d76aa-0b3d-4c0d-a740-db1fcdf7d1f9/0_0.png', seed: '1970206997' },
    { url: 'https://cdn.midjourney.com/1373db99-7dfe-4c16-94b9-4e97bf1e86ff/0_0.png', seed: '2053055087' },
    { url: 'https://cdn.midjourney.com/0d222991-6087-4a0e-aaaf-18e505ad87c0/0_1.png', seed: '2161745220' },
    { url: 'https://cdn.midjourney.com/b3a03e28-0bcf-42ad-bb59-116982b361ac/0_3.png', seed: '2355081506' },
    { url: 'https://cdn.midjourney.com/e9d3762e-890f-4363-94ca-b4d04db9b41f/0_2.png', seed: '2353892877' },
    { url: 'https://cdn.midjourney.com/8cf03219-836b-49a9-a26c-8657e6255a52/0_3.png', seed: '2371541890' },
    { url: 'https://cdn.midjourney.com/1ae6147b-dc3e-4d8d-842d-42d2fd97b2e6/0_3.png', seed: '2393219200' },
    { url: 'https://cdn.midjourney.com/c00e4895-a4bf-4b20-b3b1-00e953798362/0_1.png', seed: '2409433619' },
    { url: 'https://cdn.midjourney.com/477603c3-a824-41e1-b444-eb20227c8832/0_1.png', seed: '2443325131' },
    { url: 'https://cdn.midjourney.com/ce3dffc4-565e-4b40-925d-87d6ba0e0fb7/0_1.png', seed: '2641250070' },
    { url: 'https://cdn.midjourney.com/93be6655-6cbf-4ce3-be1b-189e79458cc1/0_0.png', seed: '2725182782' },
    { url: 'https://cdn.midjourney.com/793c94c0-b50d-47b8-adde-1d0a21960873/0_1.png', seed: '2835684468' },
    { url: 'https://cdn.midjourney.com/0d712dd7-f3cf-4bcf-a0bb-e019389f9a06/0_1.png', seed: '2895615196' },
    { url: 'https://cdn.midjourney.com/3bac7371-90bf-4dc4-8dbf-c6a1f997f023/0_2.png', seed: '2944772177' },
    { url: 'https://cdn.midjourney.com/392d29ba-a894-4d5f-b125-575c60c5934c/0_1.png', seed: '2976579136' },
    { url: 'https://cdn.midjourney.com/9da09787-2324-4fce-8abc-c4229f21c553/0_3.png', seed: '2997490820' },
    { url: 'https://cdn.midjourney.com/54158102-692c-45c3-b394-4a7f8d7b2061/0_3.png', seed: '3141008102' },
    { url: 'https://cdn.midjourney.com/66d0cd34-f5bc-472a-8102-e077562704b2/0_1.png', seed: '3153297316' },
    { url: 'https://cdn.midjourney.com/c69049eb-c2bb-4aff-afe3-d6d4160ec32e/0_0.png', seed: '3316961664' },
    { url: 'https://cdn.midjourney.com/3222590a-f7ae-4522-a648-900e7930f63c/0_0.png', seed: '3309747250' },
    { url: 'https://cdn.midjourney.com/e6c7b30c-5d18-41a5-8214-c48ff4f1cbc0/0_0.png', seed: '3331935614' },
    { url: 'https://cdn.midjourney.com/e14a7cb8-e52d-4e9c-9176-b1c6ea235b22/0_3.png', seed: '3355594279' },
    { url: 'https://cdn.midjourney.com/a9bb394d-6bc8-49d0-a35c-180beab196ee/0_1.png', seed: '3348597643' },
    { url: 'https://cdn.midjourney.com/ed12a4d6-7203-4ab8-9315-b37c5ce8897b/0_2.png', seed: '3376426223' },
    { url: 'https://cdn.midjourney.com/cf4714f7-7e41-4067-8b98-34b47e18c3ff/0_2.png', seed: '3392178830' },
    { url: 'https://cdn.midjourney.com/a6ae8d26-b151-4bf8-8ba1-39a72a31b863/0_1.png', seed: '3418211380' },
    { url: 'https://cdn.midjourney.com/68559ddc-cb60-4757-a5dc-2326d67f14ea/0_3.png', seed: '3591873577' },
    { url: 'https://cdn.midjourney.com/76cdddae-6ff8-409d-82b0-a1ccc16ea72f/0_3.png', seed: '3612442817' },
    { url: 'https://cdn.midjourney.com/059b14e3-ddd9-45f5-8ca6-013d79154e08/0_1.png', seed: '3740541509' },
    { url: 'https://cdn.midjourney.com/83c42d31-c774-4578-bf4f-e7902ce2f632/0_2.png', seed: '3783083362' },
    { url: 'https://cdn.midjourney.com/11c774cf-3387-4534-9bbe-3314fe5888d1/0_1.png', seed: '3843977434' },
    { url: 'https://cdn.midjourney.com/71ede89a-7a28-4e76-8c4d-aced3d56bb5b/0_1.png', seed: '3902411986' },
    { url: 'https://cdn.midjourney.com/11df336c-93ac-4102-b07a-636a9cf4c14e/0_2.png', seed: '3982789131' },
    { url: 'https://cdn.midjourney.com/4621cafa-f5fe-4c6e-8b21-f1cbd92309ef/0_2.png', seed: '4053834558' },
    { url: 'https://cdn.midjourney.com/f0bafeeb-d357-4498-9159-6f9c9f1888c2/0_0.png', seed: '4263820066' },
    { url: 'https://cdn.midjourney.com/a214c68d-96a1-4fd4-aa41-4384bf13c02a/0_0.png', seed: '3383543770' },
    { url: 'https://cdn.midjourney.com/547e20f8-7438-4c02-9842-059d0fe51512/0_0.png', seed: '2830365873' },
    { url: 'https://cdn.midjourney.com/66e61994-5243-4102-86f5-8d882be17f64/0_2.png', seed: '1891966879' },
];

// Sort the images array by seed value
images.sort((a, b) => parseInt(a.seed) - parseInt(b.seed));

const gallery = document.getElementById('gallery');
const overlay = document.getElementById('overlay');
const overlayContent = document.getElementById('overlayContent');
let currentImageIndex = 0;

function createGallery() {
    images.forEach((image, index) => {
        const item = document.createElement('div');
        item.className = 'item';
        item.innerHTML = `
            <img src="${image.url}" alt="Midjourney image with seed ${image.seed}" loading="lazy">
            <div class="seed" onclick="copySeed(event, '${image.seed}')">Seed: ${image.seed}</div>
        `;
        item.querySelector('img').onclick = () => openOverlay(index);
        gallery.appendChild(item);
    });
}

function openOverlay(index) {
    currentImageIndex = index;
    updateOverlayContent();
    overlay.style.display = 'block';
}

function closeOverlay() {
    overlay.style.display = 'none';
}

function updateOverlayContent() {
    const image = images[currentImageIndex];
    overlayContent.innerHTML = `
        <img src="${image.url}" alt="Midjourney image with seed ${image.seed}" class="overlay-image">
        <div class="overlay-seed" onclick="copySeed(event, '${image.seed}')">Seed: ${image.seed}</div>
    `;
}

function navigateImage(direction) {
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
    updateOverlayContent();
}

function copySeed(event, seed) {
    event.stopPropagation();
    navigator.clipboard.writeText(seed)
        .then(() => {
            const target = event.target;
            const originalText = target.textContent;
            target.textContent = 'Copied!';
            target.style.backgroundColor = 'var(--accent-color)';
            target.style.color = 'var(--bg-color)';
            setTimeout(() => {
                target.textContent = originalText;
                target.style.backgroundColor = '';
                target.style.color = '';
            }, 1500);
        })
        .catch(err => console.error('Failed to copy: ', err));
}

document.addEventListener('keydown', handleKeyDown);
document.addEventListener('wheel', handleWheel);

function handleKeyDown(e) {
    if (overlay.style.display === 'block') {
        if (e.key === 'Escape') closeOverlay();
        if (e.key === 'ArrowLeft') navigateImage(-1);
        if (e.key === 'ArrowRight') navigateImage(1);
    }
}

function handleWheel(e) {
    if (overlay.style.display === 'block') {
        e.preventDefault();
        if (e.deltaY > 0) {
            navigateImage(1);
        } else {
            navigateImage(-1);
        }
    }
}

// Initialize the gallery when the DOM is loaded
document.addEventListener('DOMContentLoaded', createGallery);