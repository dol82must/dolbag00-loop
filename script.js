// ===== 전시용 자동 시선 루프 + animate 최적화 =====

// 전역 변수
let mouseX = 0;
let mouseY = 0;

let frame = 0;
const totalFrames = 600; // 루프 길이 (프레임 수)
const speed = 2;          // 이전 1.5 → 2로 약간 빠르게

// 창 크기 대응 radius
let radiusX = window.innerWidth * 0.6;
let radiusY = window.innerHeight * 0.4;

// 창 크기 바뀔 때 radius 재계산
window.addEventListener('resize', () => {
    radiusX = window.innerWidth * 0.6;
    radiusY = window.innerHeight * 0.4;
});

// animate 루프
function animate() {
    requestAnimationFrame(animate);

    // ===== 자동 시선 루프 =====
    let progress = (frame % totalFrames) / totalFrames;
    let angle = progress * Math.PI * 2;

    // 약간 유기적인 곡선으로 눈 움직임
    mouseX = Math.cos(angle * 1.1) * radiusX / window.innerWidth * 2 - 1;
    mouseY = Math.sin(angle * 1.3) * radiusY / window.innerHeight * 2 - 1;

    frame += speed;

    // ===== 기존 Starfield 업데이트 등 =====
    updateStarfield();

    // 필요하면 카메라나 눈 위치 적용
    // 예: camera.position.x = mouseX * factor;
    //     camera.position.y = mouseY * factor;
}

// 초기 animate 실행
animate();
