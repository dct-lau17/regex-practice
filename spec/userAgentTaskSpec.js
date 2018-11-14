describe("getBrowserDetails", function () {

    var userAgent

    describe("Phone devices", function () {
        it('with Android browser', function () {
            userAgent = "Mozilla/5.0 (Linux; U; Android 4.0.3; ko-kr; LG-L160L Build/IML74K) AppleWebkit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30"
            expect(getBrowserDetails(userAgent).browserName).toEqual('Android')
            expect(getBrowserDetails(userAgent).deviceType).toEqual('Phone')
        });

        it('with Safari browser', function () {
            userAgent = "Mozilla/5.0 (iPod touch; CPU iPhone OS 7_0_3 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11B511 Safari/9537.53"
            expect(getBrowserDetails(userAgent).browserName).toEqual('Safari')
            expect(getBrowserDetails(userAgent).deviceType).toEqual('Phone')
        });

        it('with Blackberry browser', function () {
            userAgent = "Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.1.0.346 Mobile Safari/534.11+"
            expect(getBrowserDetails(userAgent).browserName).toEqual('BlackBerry')
            expect(getBrowserDetails(userAgent).deviceType).toEqual('Phone')
        });

        it('with MSIE browser', function () {
            userAgent =     "Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)"
            expect(getBrowserDetails(userAgent).browserName).toEqual('Internet Explorer')
            expect(getBrowserDetails(userAgent).deviceType).toEqual('Phone')
        });
    })

    describe("Tablet devices", function () {
        it('with Android browser', function () {
            userAgent = "Mozilla/5.0 (Linux; Android 4.0.4; en-gb; SM-T330 Build/IMM76D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Safari/533.1"
            expect(getBrowserDetails(userAgent).deviceType).toEqual('Tablet')
            expect(getBrowserDetails(userAgent).browserName).toEqual('Android')
            
        });

        it('with Chrome browser', function () {
            userAgent = "Mozilla/5.0 (iPad; CPU OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) CriOS/30.0.1599.12 Mobile/11A465 Safari/8536.25 (3B92C18B-D9DE-4CB7-A02A-22FD2AF17C8F)"
            expect(getBrowserDetails(userAgent).deviceType).toEqual('Tablet')
            expect(getBrowserDetails(userAgent).browserName).toEqual('Chrome') 
        });
    })

    describe("Desktop devices", function () {
        it('with Chrome browser', function () {
            userAgent =  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36"
            expect(getBrowserDetails(userAgent).deviceType).toEqual('Desktop')
            expect(getBrowserDetails(userAgent).browserName).toEqual('Chrome')
        });

        it('with MSIE browser', function () {
            userAgent =  "Mozilla/5.0 (compatible, MSIE 11, Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko"
            expect(getBrowserDetails(userAgent).deviceType).toEqual('Desktop')
            expect(getBrowserDetails(userAgent).browserName).toEqual('Internet Explorer')
        });

        it('with Edge browser', function () {
            userAgent =  "Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10136"
            expect(getBrowserDetails(userAgent).deviceType).toEqual('Desktop')
            expect(getBrowserDetails(userAgent).browserName).toEqual('Edge')
        });

        it('with Firefox browser', function () {
            userAgent =  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:60.0) Gecko/20100101 Firefox/60.0"
            expect(getBrowserDetails(userAgent).deviceType).toEqual('Desktop')
            expect(getBrowserDetails(userAgent).browserName).toEqual('Firefox')
        });

        it('with Opera browser', function () {
            userAgent =  "Opera/9.80 (X11; Linux x86_64; U; Ubuntu/10.10 (maverick); pl) Presto/2.7.62 Version/11.01"
            expect(getBrowserDetails(userAgent).deviceType).toEqual('Desktop')
            expect(getBrowserDetails(userAgent).browserName).toEqual('Opera')
        });
    })

    describe("Bots", function () {
        it('knows it is a bot', function () {
            userAgent =   "AdsBot-Google (+http://www.google.com/adsbot.html)"
            expect(getBrowserDetails(userAgent).deviceType).toEqual('Bot')
            expect(getBrowserDetails(userAgent).browserName).toEqual('Bot')
        })
    })
});
