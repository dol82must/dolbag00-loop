// ===== 전시용 자동 시선 루프 + animate 최적화 =====

// 전역 변수
let mouseX = 0;
let mouseY = 0;

let frame = 0;
const totalFrames = 600; // 루프 길이 (프레임 수)
const speed = 2;          // 루프 속도

// animate 루프
function animate() {
    requestAnimationFrame(animate);

    // ===== 자동 시선 루프 =====
    let progress = (frame % totalFrames) / totalFrames;
    let angle = progress * Math.PI * 2;

    // PC / 모바일 대응 factor (-1 ~ 1 범위 유지)
    const factorX = window.innerWidth > 600 ? 0.6 : 0.5;  
    const factorY = window.innerHeight > 600 ? 0.4 : 0.3;

    mouseX = Math.cos(angle * 1.1) * factorX;
    mouseY = Math.sin(angle * 1.3) * factorY;

    frame += speed;

    // ===== 기존 Starfield / 캐릭터 업데이트 =====
    updateStarfield();

    // 필요하면 카메라/눈 위치 적용
    // camera.position.x = mouseX * factor;
    // camera.position.y = mouseY * factor;
}

// 초기 animate 실행
animate();
