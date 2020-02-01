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
                    console.log(devices);
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
                
                this.Reader.decodeOnceFromVideoDevice(device.id, 'video').then((result) => {
                        console.log(result);
                        $('#index-barcode').val(result.text);
                }).catch((err) => {
                        console.log(err);
                        $('#index-barcode').val('error');
                });
                
                console.log(`Started continous decode from camera with id ${device}`);
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


