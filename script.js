// ===== 전시용 자동 시선 루프 + 캐릭터 직접 제어 =====

let frame = 0;
const totalFrames = 600;
const speed = 2;

// 화면 중앙 좌표
const centerX = window.innerWidth / 2;
const centerY = window.innerHeight / 2;

// 캐릭터 최대 이동 범위
const maxX = window.innerWidth * 0.3;
const maxY = window.innerHeight * 0.2;

// animate 루프
function animate() {
    requestAnimationFrame(animate);

    // 루프 진행률
    let progress = (frame % totalFrames) / totalFrames;
    let angle = progress * Math.PI * 2;

    // PC / 모바일 factor
    const factorX = window.innerWidth > 600 ? 1 : 0.8;
    const factorY = window.innerHeight > 600 ? 1 : 0.7;

    // 캐릭터 위치 계산
    const charX = centerX + Math.cos(angle * 1.1) * maxX * factorX;
    const charY = centerY + Math.sin(angle * 1.3) * maxY * factorY;

    // Starfield.js에서 사용하는 캐릭터 객체 직접 제어
    if (typeof character !== "undefined") {
        character.position.x = charX;
        character.position.y = charY;
    }

    frame += speed;

    // Starfield 업데이트 (기존 코드)
    if (typeof updateStarfield === "function") updateStarfield();
}

// 초기 animate 실행
animate();
