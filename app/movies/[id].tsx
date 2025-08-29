import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import useFetch from '@/services/useFetch';
import { fetchMovieDetails } from '@/services/api';


const MovieDeatils = () => {
    const { id } = useLocalSearchParams();

    const { data: movie, loading } = useFetch(() =>
        fetchMovieDetails(id as string)
    );
    console.log("Image URL:", movie?.imageUrl);
    return (
        <View className="bg-primary flex-1">
            <ScrollView
                contentContainerStyle={{
                    paddingBottom: 80
                }}
            >
                <View>
                    <Image
                        source={{ uri: movie?.imageUrl }}
                        className="w-full h-[550px]"
                        resizeMode="stretch"
                    />


                </View>
            </ScrollView>
        </View>
    );
};

export default MovieDeatils;
