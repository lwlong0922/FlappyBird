class Manager{
    constructor() {
        this.objMgr={}
    }
    getMgr(name) {
        if (name===''||!this.objMgr[name]) {
            return null;
        }
        return this.objMgr[name];
    }
    addMgr(name, obj) {
        if (name === '' || !obj) {
            return;
        }
        this.objMgr[name] = obj;
    }
    remove(name) {
        if (name === '') {
            return;
        }
        delete this.objMgr[name];
    }
    clear() {
        for (let key in this.objMgr) {
            this.remove(key);
        }
    }

    gameOver() {
        for (let key in this.objMgr) {
            if (this.objMgr[key].gameOver) {
                this.objMgr[key].gameOver()
            }
        }
    }

    onInitManager() {
        for (let key in this.objMgr) {
            if (this.objMgr[key].onInit) {
                this.objMgr[key].onInit();
            }
        }
    }

    onLateInitManager() {
        for (let key in this.objMgr) {
            if (this.objMgr[key].onLateInit) {
                this.objMgr[key].onLateInit()
            }
        }
    }

    onUpdateManager(dt) {
        for (let key in this.objMgr) {
            if (this.objMgr[key].onUpdate) {
                this.objMgr[key].onUpdate(dt)
            }
        }
    }

    onLateUpdateManager(dt) {
        for (let key in this.objMgr) {
            if (this.objMgr[key].onLateUpdate) {
                this.objMgr[key].onLateUpdate(dt);
            }
        }
    }
}
let instance = null;
module.exports.getInstance=()=>{
    if (!instance) {
        instance = new Manager();
    }
    return instance;
}