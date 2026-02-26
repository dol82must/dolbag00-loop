// ===== 전시용 자동 시선 루프 + 모바일 대응 =====

// 전역 변수
let mouseX = 0;
let mouseY = 0;

let frame = 0;
const totalFrames = 600; // 루프 길이
const speed = 2;          // 속도

// animate 루프
function animate() {
    requestAnimationFrame(animate);

    // ===== 자동 시선 루프 =====
    let progress = (frame % totalFrames) / totalFrames;
    let angle = progress * Math.PI * 2;

    // PC / 모바일 대응
    let factorX = 0.6;
    let factorY = 0.4;

    // 화면이 작은 모바일이면 factor 조정
    if(window.innerWidth <= 600 || window.innerHeight <= 600){
        factorX = 0.5;
        factorY = 0.3;
    }

    // -1 ~ 1 범위 유지, 모바일/PC 모두 화면 안쪽
    mouseX = Math.cos(angle * 1.1) * factorX;
    mouseY = Math.sin(angle * 1.3) * factorY;

    frame += speed;

    // ===== Starfield / 캐릭터 업데이트 =====
    // 캐릭터를 화면 중앙 기준으로 이동하도록 안전하게 적용
    if(typeof updateStarfield === "function"){
        updateStarfield(mouseX, mouseY); // Starfield.js가 mouseX/Y 파라미터를 받을 수 있도록 수정
    }
}

// 초기 animate 실행
animate();
