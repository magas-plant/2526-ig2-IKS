// popAnim.js
// 用于物体“弹出出现”的缩放动画

class PopAnimator {
    constructor(duration = 600, overshoot = 1.25) {
        this.duration = duration;     // 动画时长 ms
        this.overshoot = overshoot;   // 最大放大倍数
        this.startTime = millis();
        this.finished = false;
    }

    getScale() {
        let t = (millis() - this.startTime) / this.duration;

        if (t >= 1) {
            this.finished = true;
            return 1;
        }

        // 使用 backOut 缓动（带回弹）
        return this.backOut(t);
    }

    backOut(t) {
        let s = 1.70158 * 1.5; // 回弹强度
        t -= 1;
        return 1 + (t * t * ((s + 1) * t + s));
    }
}
