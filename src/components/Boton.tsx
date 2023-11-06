import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { themeApp } from '../theme/appTheme'

type PropsBoton = {
    label:string;
    color?: string,
    ceroButton?:boolean,
    action: ( param:string )=> void
}
export const Boton= ({ label, color='#2D2D2D', ceroButton= false, action }: PropsBoton ) => {

  return (
    <TouchableOpacity
      style={[
        themeApp.boton,
        { backgroundColor:color },
        ( ceroButton ? { flex:5.5 }:{ flex:2.5 })
      ]}
      onPress={ ()=>{ action(label) }}
    >
      <View >
        <Text style={[
          themeApp.botonTexto,
          color === '#9B9B9B' ? {color:'black'} : {color:'white'},
        ]}>{ label }</Text>
      </View>
    </TouchableOpacity>
  )
}
