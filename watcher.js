function Watcher(vm, exp, cb) {
    this.vm = vm
    this.exp = exp
    this.cb = cb
    this.value = this.get()
}


Watcher.prototype = {
    get(){
        Dep.target = this
        var value = this.vm.data[this.exp]
        Dep.target = null
        return value
    },
    update(){
        var value = this.vm.data[this.exp]
        var oldVal = this.value
        if(value !== oldVal) {
            this.value = value
            this.cb.call(this.vm, value, oldVal)
        }
    }
}