window.GetBoundRect = {
    CheckBoundRect: async function (dotNetObjRef) {
        let touching = 0;
        const obstacle = document.getElementById("rectUp1");
        const player = document.getElementById("Player");

        const rect1 = player.getBoundingClientRect();
        const rect2 = obstacle.getBoundingClientRect();

        const horizontalTouch = rect1.right >= rect2.left && rect1.left <= rect2.right;
        const verticalTouch = rect1.bottom >= rect2.top && rect1.top <= rect2.bottom;

        if (horizontalTouch && verticalTouch) {
            touching = 1;
        }

        const obstacle2 = document.getElementById("rectDown1");
        const rect3 = obstacle2.getBoundingClientRect();

        const horizontalTouch2 = rect1.right >= rect3.left && rect1.left <= rect3.right;
        const verticalTouch2 = rect1.bottom >= rect3.top && rect1.top <= rect3.bottom;
            
        if (horizontalTouch2 && verticalTouch2) {
            touching = 1;
        }

        const obstacle3 = document.getElementById("rectDown2");
        const rect4 = obstacle3.getBoundingClientRect();

        const horizontalTouch3 = rect1.right >= rect4.left && rect1.left <= rect4.right;
        const verticalTouch3 = rect1.bottom >= rect4.top && rect1.top <= rect4.bottom;

        if (horizontalTouch3 && verticalTouch3) {
            touching = 1;
        }

        if (touching == 1) {
            console.log("game over");

            dotNetObjRef.invokeMethodAsync("CheckForGameOver", true);
        }

    }
}