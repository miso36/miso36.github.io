/* global ajax */
var vueOptions = {
    el: '#vueApp',
    data: {
        products: [],
        newProduct: {}
    },
    mounted: function () {
        this.getAllProducts();
        Warehouse.Socket.on('product', this.getProduct);
    },
    methods: {
        getAllProducts () {
            let self = this;        
            ajax.getAllProducts(function(data) {
                console.log(data);
                self.products = data;
                /*setTimeout(function(){
                    self.getAllProducts();
                }, 5000);*/
            });
        },
        
        getProduct(data) {
           let self = this;
           self.products.push(data);
        },
        
        createProduct () {
            console.log('som tu');
            ajax.createProduct(this.newProduct, function(data) {
                console.log(data);
            });
        },
        
        showModal () {
            $('#modal-scanner').modal('show');
            Warehouse.initReader();
            Warehouse.setReaderDevice(0);
            Warehouse.startReading();
            /*Quagga.init(
                    barcodeConfig,
                    function(err) {
                            if (err) {
                                    $('#livestream_scanner .modal-body .error').html('<div class="alert alert-danger"><strong><i class="fa fa-exclamation-triangle"></i> '+err.name+'</strong>: '+err.message+'</div>');
                                    Quagga.stop();
                                    return;
                            }
                            Quagga.start();
                    }
            );*/
        }
    }    
    
};

