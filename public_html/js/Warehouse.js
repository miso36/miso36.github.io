var Warehouse = new function ()
{
        this.Vue = {};
        this.Socket = {};
        this.Reader = {};
        
        let devicesArr = [];
        let device = {};
        let self = this;
        
        function getCameraDevices ()
        {
                self.Reader.getVideoInputDevices().then(devices => {
                    devicesArr = devices;
                });
                
        };
        
        this.getReaderDevices = function ()
        {
                return devicesArr;
        };
        
        this.setReaderDevice = function (index)
        {
                device = devicesArr[index];
        };
        
        this.startReading = function ()
        {
                this.Reader.decodeOnceFromVideoDevice(device, 'video').then((result) => {
                        $('#index-barcode').val(result);
                });
        };
        
        this.resetReader = function ()
        {
                this.Reader.reset();
        };
        
        this.initReader = function ()
        {
                getCameraDevices();
        };
};


