const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    mutex: true,
    volume: 0.4,
    audio: [{
        name: '霓虹甜心',
        artist: '马赛克',
        url: 'http://music.163.com/song/media/outer/url?id=1324880066.mp3',
        cover: 'https://p1.music.126.net/oxIICTh5pviLWVhHtn0_-Q==/109951163661956091.jpg?param=130y130',
    }]
});