formValidation={
    init: function() {
        this.valid();
        this.inputmask();
        this.YesNo();
        this.addressSame();
        this.productTotal();
        this.updateTotal();
    },

    valid:function(){
        $("#productForm").validate({
            onfocusout: function(element) {
                this.element(element);
            },
            rules: {
                
                creditfname:{
                    required: true, 
                    pattern:true  
                },
                creditlname:{
                    required: true,
                    pattern:true    
                },
                firstname:{
                    required: true, 
                    pattern:true    
                },
                lastname:{
                    required: true,
                    pattern:true         
                },
                email : {
                    required: true
                },
                phone : {
                    required: true,
                },
                street1 : {
                    required: true,
                    alphanumeric:true
                    
                },
                street2 : {
                    required: true,
                    alphanumeric:true
                },
                city : {
                    required: true,
                    pattern:true
                }, 
                state : {
                    required: true,
                    pattern:true
                },
                pincode : {
                    required: true,
                    minlength: 4,
                    maxlength :6,
                    number: true
                },
                country:{
                    required: true,
                },
                giftfirstname:{
                    required:true,
                    pattern:true
                },
                giftlastname:{
                    required:true,
                    pattern:true
                },  
                giftcontact: {
                    required: true
                },
                giftstreet1 : {
                    required: true,
                    alphanumeric:true
                    
                },
                giftstreet2 : {
                    required: true,
                    alphanumeric:true
                },
                giftcity : {
                    required: true,pattern:true
                }, 
                giftstate : {
                    required: true,
                    pattern:true
                },
                giftpincode : {
                    required: true,
                    minlength: 4,
                    maxlength :6
                },
                giftcountry:{
                    required: true,
                },
                requests:{
                    required: true,
                }
            },
            messages : {
                productcheck:{
                    required: "Please select a Product"
                },
                creditfname: {
                    required: "card details required"       
                },
                creditlname: {
                    required: "card details required"
                },
                country:{
                    required:"Please select country"
                },
                giftcountry:{
                    required:"Please select country"
                }
            },
            
        });
    },
    
    inputmask: function(){
        $('.phone').inputmask('99-9999999999'); 

    },

    YesNo: function(){
        $("input[name=gift]").change(function(){
            var varChange = $('input[name=gift]:checked').val();
            if (varChange == 'yes') {
                $('#mydiv').show();
            }
            else {
                $('#mydiv').hide();
                $('#add1').val("");
                $('#add2').val("");
                $('#giftcity').val("");
                $('#giftstate').val("");
                $('#pcode').val("");
                $('#same').prop('checked', false);
                $('#giftcountry option[value=""]').attr('selected','selected');
            }
          });
     },

    addressSame: function(){
        $('#same').click(function(){ 
            if ($('#same').is(":checked")) {
             $('#add1').val($('#street1').val());
             $('#add2').val($('#street2').val());
             $('#giftcity').val($('#city').val());
             $('#giftstate').val($('#state').val());
             $('#pcode').val($('#pin').val());
             var c = $('#country option:selected').val();
             $('#giftcountry option[value=' + c + ']').attr('selected','selected');
            } 
            else { //Clear on uncheck
             $('#add1').val("");
             $('#add2').val("")
             $('#giftcity').val("");
             $('#giftstate').val("");
             $('#pcode').val("");
             $('#giftcountry option[value=""]').attr('selected','selected');
            };
         });
    },

    productTotal: function(){
        $(".productselect").click(function() {
            var total = 0;
            var price=0;
            var quantity=0;
            $(".productselect:checked").each(function() {
                price = parseInt($(this).val());
                quantity = parseInt($(this).parent().siblings().find('select', 'quantity').val());
                var amount = (quantity*price);
                total+=amount;
                // total += parseFloat($(this).val());
            });
            if (total == 0) {
                $('#total').html("0.00");
            } else {				
                $('#total').html(total);
            }
        });
    },

    updateTotal: function(){
        $(".quantity").on('change', function() {
            $(this).parent().parent().parent().parent().find('input', 'productselect').prop("checked", true);

            var total = 0;
            var price=0;
            var quantity=0;
            $(".productselect:checked").each(function() {
                price = parseInt($(this).val());
                quantity = parseInt($(this).parent().siblings().find('select', 'quantity').val());
                var amount = (quantity*price);
                total+=amount;
            });
            if (total == 0) {
                $('#total').html("0.00");
            } else {				
                $('#total').html(total);
            }
    });
}

}
      
function sendData(){
  
  var fcname0 = document.getElementById("creditfname").value;
  localStorage.setItem("text5",fcname0);
  
  var lcname0 = document.getElementById("creditlname").value;
  localStorage.setItem("text6",lcname0);
  
  var fname0 = document.getElementById("fname").value;
  localStorage.setItem("text7",fname0);
  
  var lname0 = document.getElementById("lname").value;
  localStorage.setItem("text8",lname0);
  
  var mail0 = document.getElementById("email").value;
  localStorage.setItem("text9",mail0);
  
  var mno0 = document.getElementById("phone").value;
  localStorage.setItem("text10",mno0);
  
  var street10 = document.getElementById("street1").value;
  localStorage.setItem("text11",street10);
  
  var street20 = document.getElementById("street2").value;
  localStorage.setItem("text12",street20);
  
  var city0 = document.getElementById("city").value;
  localStorage.setItem("text13",city0);
  
  var state0 = document.getElementById("state").value;
  localStorage.setItem("text14",state0);
  
  var code0 = document.getElementById("pin").value;
  localStorage.setItem("text15",code0);
  
  var country0 = document.getElementById("country").value;
  localStorage.setItem("text16",country0);
  
  var gift0 = $('input[type="radio"][name = "gift"]:checked').val();
  localStorage.setItem("text17",gift0);
  
  var fgname0 = document.getElementById("giftfname").value;
  localStorage.setItem("text18",fgname0);
  
  var lgname0 = document.getElementById("giftlname").value;
  localStorage.setItem("text19",lgname0);
  
  var mno10 = document.getElementById("contact").value;
  localStorage.setItem("text20",mno10);
  
  var street120 = document.getElementById("add1").value;
  localStorage.setItem("text21",street120);
  
  var street220 = document.getElementById("add2").value;
  localStorage.setItem("text22",street220);
  
  var city20 = document.getElementById("giftcity").value;
  localStorage.setItem("text23",city20);
  
  var state20 = document.getElementById("giftstate").value;
  localStorage.setItem("text24",state20);
  
  var code20 = document.getElementById("pcode").value;
  localStorage.setItem("text25",code20);
  
  var country20 = document.getElementById("giftcountry").value;
  localStorage.setItem("text26",country20);
  
  var area10 = document.getElementById("addrequest").value;
  localStorage.setItem("text27",area10);
  }

