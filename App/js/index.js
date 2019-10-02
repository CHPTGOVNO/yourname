// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1")
                .setDirtyMark(false)
                .setLeft("10em")
                .setTop("12.5em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Your NAME:")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button1")
                .setDirtyMark(false)
                .setLeft("14.166666666666666em")
                .setTop("15em")
                .setWidth("10.583333333333334em")
                .setHeight("5.333333333333333em")
                .setCaption("Hallo")
            );
            
            append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image4")
                .setLeft("11.666666666666666em")
                .setTop("4.166666666666667em")
                .setSrc("{xui.ini.img_pic}")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});