import FingerprintJS from '@fingerprintjs/fingerprintjs'

class Core {
    constructor() {
        this.fpPromise = FingerprintJS.load()
    }

    /**
     * 获取用户标识
     * @returns {Promise<string>}
     */
    async getVisitorId() {
        console.log(21)
        const fp = await this.fpPromise
        const result = await fp.get()
        const visitorId = result.visitorId
        return visitorId
    }
}
