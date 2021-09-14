const { ccclass, property } = cc._decorator;

@ccclass
export default class HelloWorld extends cc.Component {
    @property(cc.Sprite)
    private sprite: cc.Sprite = null;

    @property(cc.Texture2D)
    private fireTexture: cc.Texture2D = null!;
    @property(cc.Texture2D)
    private maskTexture: cc.Texture2D = null!;
    @property(cc.Texture2D)
    private moveTexture: cc.Texture2D = null!;
    @property(cc.Color)
    private startColor: cc.Color = cc.Color.WHITE;
    @property(cc.Color)
    private centerColor: cc.Color = cc.Color.WHITE;
    @property(cc.Color)
    private endColor: cc.Color = cc.Color.WHITE;

    protected onLoad() {
        const material = this.sprite.getMaterial(0);
        material.setProperty("fireTexture", this.fireTexture);
        material.setProperty("maskTexture", this.maskTexture);
        material.setProperty("moveTexture", this.moveTexture);
        material.setProperty("startColor", this.startColor);
        material.setProperty("centerColor", this.centerColor);
        material.setProperty("endColor", this.endColor);
    }

    protected start() {
        cc.dynamicAtlasManager.enabled = false;
        const material = this.sprite.getMaterial(0);
        material.setProperty("fireThreshold", 0);
        cc.tween(this.sprite)
            .sequence(
                cc.tween().to(
                    2,
                    { fillRange: 0 },
                    {
                        progress: (start, end, current, t) => {
                            material.setProperty("fireThreshold", t);
                        },
                        easing: cc.easing.sineInOut,
                    }
                ),
                cc.tween().to(
                    2,
                    { fillRange: 0 },
                    {
                        progress: (start, end, current, t) => {
                            material.setProperty("fireThreshold", 1 - t);
                        },
                        easing: cc.easing.sineInOut,
                    }
                )
            )
            .repeatForever()
            .start();
        cc.log(module);
    }
}
module test {
    export let a = 0;
}
