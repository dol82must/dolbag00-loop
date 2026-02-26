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
    requestAnimationFrame(animate);// ===== 전시용 자동 시선 루프 + animate 최적화 =====

// 전역 변수
let mouseX = 0;
let mouseY = 0;

let frame = 0;
const totalFrames = 600; // 루프 속도 (600프레임 = 약 10초)
const speed = 1.5;       // 움직임 속도 조절

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
