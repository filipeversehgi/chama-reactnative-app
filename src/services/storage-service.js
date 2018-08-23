import { AsyncStorage } from "react-native"

console.log('- Loading Storage Service');

export async function setup() {
    console.log('- Setupping Storage Service');
    return true;
}

export async function store(key, value) {
    console.log('- Storing', value);
    const stringValue = JSON.stringify(value);
    try {
        await AsyncStorage.setItem(`@ChamaStore4:${key}`, stringValue);
        return true
    } catch (err) {
        console.log('Error Saving courses.');
        console.log(err);
        return err;
    }
}

export async function get(key) {
    try {
        const value = await AsyncStorage.getItem(`@ChamaStore4:${key}`);
        if(value !== null) {
            return JSON.parse(value);
        }
    } catch (err) {
        console.log('Error Retrieving courses.');
        console.log(err);
        return err;
    }
}

export async function list() {
    try {
        return await AsyncStorage.getAllKeys();
    } catch (err) {
        console.log(`Error listing available keys.`);
        console.log(err);
        return err;
    }
}