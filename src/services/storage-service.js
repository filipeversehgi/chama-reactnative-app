import { AsyncStorage } from "react-native"

console.log('- Loading Storage Service');

export async function setup() {
    console.log('- Setupping Storage Service');
    return true;
}

export async function store(key, value) {
    try {
        await AsyncStorage.setItem(`@ChamaStore:${key}`, value);
        return true
    } catch (err) {
        console.log(`Error Saving ${key}.`);
        console.log(err);
        return err;
    }
}

export async function get(key) {
    try {
        const value = await AsyncStorage.getItem(`@ChamaStore:${key}`);
        if(value !== null) {
            return value;
        }
    } catch (err) {
        console.log(`Error Retrieving ${key}.`);
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