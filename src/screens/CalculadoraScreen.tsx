import { View, Text } from 'react-native'
import { themeApp } from '../theme/appTheme'
import { Boton } from '../components/Boton'
import { useCalculador } from '../hooks/useCalculadora'

export const CalculadoraScreen = () => {
  
  const colores = {
    grisClaro:'#9B9B9B',
    naranja:'#FF9427',
}
  const { 
    numero,
    numeroAnterior,
    handleResetNumero,
    handlePositivoNegativo,
    btnDelete,
    armarNumero,
    handleOperacion,
    calcular 
  } = useCalculador();

  return (
    <View style={ themeApp.calculadoraContainer }>
      {numeroAnterior !=='0' && <Text style={ themeApp.resultadoPequeño }>{ numeroAnterior }</Text>}
      <Text style={ themeApp.resultado}
        numberOfLines={1}
        adjustsFontSizeToFit
      >{ numero }</Text>

      <View style={ themeApp.filaBotones }>
        <Boton label='C' color={colores.grisClaro} action={ handleResetNumero } />
        <Boton label='+/-'color={colores.grisClaro} action={ handlePositivoNegativo } />
        <Boton label='del' color={colores.grisClaro}action={ btnDelete } />
        <Boton label='/' color={ colores.naranja } action={ ()=>{ handleOperacion('dividir') } }/>
      </View>

      <View style={ themeApp.filaBotones }>
        <Boton label='7' action={ armarNumero }/>
        <Boton label='8' action={ armarNumero }/>
        <Boton label='9' action={ armarNumero }/>
        <Boton label='X' color={ colores.naranja } action={ ()=>{ handleOperacion('multiplicar') }}/>
      </View>

      <View style={ themeApp.filaBotones }>
        <Boton label='4' action={ armarNumero } />
        <Boton label='5' action={ armarNumero } />
        <Boton label='6' action={ armarNumero } />
        <Boton label='-' color={ colores.naranja } action={ ()=>{ handleOperacion('restar') } } />
      </View>

      <View style={ themeApp.filaBotones }>
        <Boton label='1' action={ armarNumero }/>
        <Boton label='2' action={ armarNumero }/>
        <Boton label='3' action={ armarNumero }/>
        <Boton label='+' color={ colores.naranja } action={ ()=>{ handleOperacion('sumar') }}/>
      </View>
      
      <View style={ themeApp.filaBotones }>
        <Boton label='0' ceroButton={ true } action={ armarNumero }/>
        <Boton label='.' action={ armarNumero }/>
        <Boton label='=' color={ colores.naranja } action={ calcular }/>
      </View>
    </View>
  )
}
