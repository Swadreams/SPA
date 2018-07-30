import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {        
        flex: 1,
        flexDirection: 'row'
    },
    spaRow: {
      flex: 2,
      flexDirection: 'row',
      alignItems: 'center'        
    },
    
    spaSummaryBox: {
      alignItems: 'center',    
      backgroundColor: '#000', 
      height: 100,
      justifyContent: 'center'   
    },
  
    spaItem: {
      color: "#fff",
      alignItems: 'center',
      justifyContent: 'center'    
    },
  
    spaBadge: {
      marginTop: 15,
      fontWeight: '600',
      fontSize: 25,
      color:'#fff',
      alignItems: 'center',
      justifyContent: 'center'     
    }
});