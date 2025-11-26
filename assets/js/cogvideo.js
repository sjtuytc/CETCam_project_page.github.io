// 视频列表，按照顺序存储视频路径
const videoList = [
    'CETCam_videos/cambench_demos/1.mp4',
    'CETCam_videos/cambench_demos/2.mp4',
    'CETCam_videos/cambench_demos/3.mp4',
    'CETCam_videos/cambench_demos/4.mp4',
    'CETCam_videos/cambench_demos/5.mp4',
];

// 当前视频的索引
let currentVideoIndex = 0;

// 获取视频元素和提示元素
const videoElement = document.getElementById('cog_video');
const videoSource = document.getElementById('videoSource');
const cogPrompt = document.getElementById('cog_prompt');

// 更新视频源和提示文字
function updateVideo() {
    // 更新视频源
    videoSource.setAttribute('src', videoList[currentVideoIndex]);
    videoElement.load(); // 加载新的视频
    videoElement.play(); // 播放新的视频

    // 更新提示文字
    switch (currentVideoIndex) {
        case 0:
            cogPrompt.textContent = 'Right-upward Orbiting';
            break;
        case 1:
            cogPrompt.textContent = '360 Orbit';
            break;
        case 2:
            cogPrompt.textContent = 'Pan Left and Zoom Out';
            break;
        case 3:
            cogPrompt.textContent = 'Dolly Out and Pan Left';
            break;
        case 4:
            cogPrompt.textContent = '360 Orbit';
            break;
    }
}

// 切换视频的函数
function changeVideo(direction) {
    if (direction === 'prev') {
        currentVideoIndex = (currentVideoIndex - 1 + videoList.length) % videoList.length; // 循环到前一个视频
    } else if (direction === 'next') {
        currentVideoIndex = (currentVideoIndex + 1) % videoList.length; // 循环到下一个视频
    }

    // 更新视频和提示文字
    updateVideo();
}

// 页面加载时初始化视频
document.addEventListener('DOMContentLoaded', () => {
    updateVideo();
});
