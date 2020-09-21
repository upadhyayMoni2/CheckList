ZOHO.CREATOR.init()
        .then(function(data) {
            alert("in")
            var formData = {   
                                "data" : {
                                    "Check_List_Name" : "Test",
                                    "Description" : "Test Desc"
                                }
                            }
            var config = {        
                formName : "Check_List", 
                data : formData 
            } 
            ZOHO.CREATOR.API.addRecord(config).then(function(response){ 
                if(response.code == 3000){
                    console.log("Record added successfully");
                    console.log(response);
                }
            });
        });
alert("hello")