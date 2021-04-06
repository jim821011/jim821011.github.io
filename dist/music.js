const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    theme: '#b7daff',
    loop: 'all',
    order: 'list',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: '200px',
    lrcType: 3,
    audio: [
      {
        name: "夜に駆ける",
        artist: '紫咲シオン',
        url: 'https://drive.google.com/uc?export=download&id=197hXk_GbCFfo7LE_cyGujCJVo7c9dByB',
        cover: '/music/cover/夜に駆ける Covered by 紫咲シオン.png',
        lrc: '',
      },
      {
        name: "乙女解剖",
        artist: '紫咲シオン',
        url: 'https://drive.google.com/uc?export=download&id=10W5sKzg5K3UwaZnbtQpJCf5oiuP2rYBb',
        cover: '/music/cover/乙女解剖 紫咲シオン.jpg',
        lrc: '',
      },
    ]
});