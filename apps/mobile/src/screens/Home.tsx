import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const stack = createNativeStackNavigator()

export default function Home() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home</Text>
        </View>
    )
}
