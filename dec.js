(function (e, i) {
    if (typeof define === 'function' && define.amd) {
        define([], i)
    } else if (typeof exports === 'object') {
        module.exports = i()
    } else {
        e.dec = i()
    }
}(window, () => {
    let o = {}
    o.or = (a, b) => {
        if (b == 1 || b == 0) {
            if (a == 1 || b == 1) {
                return 1
            } else {
                return 0
            }
        } else {
            let f = false
            for (let i of a) {
                if (i == 1) {
                    f = true
                    break
                }
            }
            if (f) {
                return 1
            } else {
                return 0
            }
        }
    }
    o.and = (a, b) => {
        if (b == 1 || b == 0) {
            if (a == 1 & b == 1) {
                return 1
            } else {
                return 0
            }
        } else {
            let f = false
            for (let i of a) {
                if (i == 0) {
                    f = true
                    break
                }
            }
            if (f) {
                return 0
            } else {
                return 1
            }
        }
    }
    o.not = (a) => {
        return (a == 1) ? 0 : 1
    }
    o.nor = (a, b) => {
        return o.not(o.or(a, b))
    }
    o.nand = (a, b) => {
        return o.not(o.and(a, b))
    }
    o.exor = (a, b) => {
        if (b == 1 || b == 0) {
            return (o.nand(o.nand(o.not(a), b), o.nand(a, o.not(b))))
        } else {
            let sum = 0
            for (let i of a) {
                sum += i
            }
            if (sum % 2 == 1) {
                return 1
            } else {
                return 0
            }
        }
    }
    
    return o
}))