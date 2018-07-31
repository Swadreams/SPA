import theme from './_theme.colors';

export default {
/* Text styles */
    h1 : {
        fontFamily: 'Roboto',
        fontSize: 32,
        fontWeight: '500',
        fontStyle: 'normal',        
        textAlign: 'left',
        //color: '#393939',
        color: theme.GRAY_BASE,
    },
    h2 : {
        fontFamily: 'Roboto',
        fontSize: 24,
        fontWeight: '500',
        fontStyle: 'normal',                
        textAlign: 'left',
        //color: '#393939',
        color: theme.GRAY_BASE,
    },
    h3 : {
        fontFamily: 'Roboto',
        fontSize: 22,
        fontWeight: '500',
        fontStyle: 'normal',                
        textAlign: 'left',
        //color: '#393939',
        color: theme.GRAY_BASE,
    },
    h4 : {
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: '500',
        fontStyle: 'normal',                
        textAlign: 'left',
        //color: '#393939',
        color: theme.GRAY_BASE,
    },
    h5 : {
        fontFamily: 'Roboto',
        fontSize: 17,
        fontWeight: '500',
        fontStyle: 'normal',                
        textAlign: 'left',
        //color: '#393939',
        color: theme.GRAY_BASE,
    },
    h6 : {
        fontFamily: 'Roboto',
        fontSize: 15,
        fontWeight: '500',
        fontStyle: 'normal',                
        textAlign: 'left',
        //color: '#393939',
        color: theme.GRAY_BASE,
    },
    Text_Style : {
        fontFamily: 'Roboto',
        fontSize: 15,
        fontWeight: '500',
        fontStyle: 'normal',              
        textAlign: 'left',
        //color: '#4990e2',
        color: theme.BLUE
    },
    Body_Regular : {
        fontFamily: 'Roboto',
        fontSize: this.FONT_SIZE_REGULAR,
        fontWeight: 'normal',
        fontStyle: 'normal',        
        textAlign: 'left',
        //color: '#393939',
        color: theme.GRAY_BASE,
    },
    Link_Style : {
        fontFamily: 'Roboto',
        fontSize: this.FONT_SIZE_SMALL,
        fontWeight: 'normal',
        fontStyle: 'normal',                
        textAlign: 'left',
        //color: '#4990e2',
        color: theme.BLUE
    },
    Body_Small : {
        fontFamily: 'Roboto',
        fontSize: this.FONT_SIZE_SMALL,
        fontWeight: 'normal',
        fontStyle: 'normal',        
        textAlign: 'left',
        //color: '#5d5d5d',
        color: theme.GRAY_DARKER
    },
    Error_Style : {
        fontFamily: 'Roboto',
        fontSize: this.FONT_SIZE_SMALL,
        fontWeight: 'normal',
        fontStyle: 'normal',                       
        textAlign: 'left',
        //color: '#d3010f',
        color: theme.RED_LIGHT
    },

    FONT_SIZE_SMALL: 12,
    FONT_SIZE_MEDIUM: 14,
    FONT_SIZE_REGULAR: 15,
    FONT_SIZE_LARGE: 16,

    FONT_WEIGHT_LIGHT: 200,
    FONT_WEIGHT_MEDIUM: 600,
    FONT_WEIGHT_HEAVY: 800,

    Align_Right: {
        textAlign: 'right'
    }
}