/* global Warehouse, vueOptions */

var ajax = new function ()
{
        let baseUrl = 'http://89.221.218.203:3000/';
        
        function get(url, cb, params = {})
        {
                $.getJSON(url, cb);
                
        }
        
        function post(url, params, cb)
        {
                $.post(url, params, cb);
        }
        
        this.getAllProducts = function (cb)
        {
                get(baseUrl + 'products', cb);
        };
        
        this.createProduct = function (params, cb)
        {
                $.post(baseUrl + 'products', params, cb);
        };
        
};


window.onload = function ()
{
        Warehouse.Socket = io.connect('http://89.221.218.203:3000', { rejectUnauthorized: false });
        Warehouse.Vue = new Vue(vueOptions);
        Warehouse.Reader = new ZXing.BrowserBarcodeReader();
        Warehouse.initReader();
        
        $('#modal-scanner').on('hidden.bs.modal', function () {
            Warehouse.resetReader();
        });
        
        
};
