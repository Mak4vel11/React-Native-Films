import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link } from "expo-router";
import {icons} from "@/constants/icons";


const MovieCard = ({ id, fullName, title, imageUrl, }: any) => {
    return (
        <Link href={`/movies/${id}`} asChild>
            <TouchableOpacity className='w-[30%]'>
                <Image
                    source={{
                        uri: imageUrl
                            ? `${imageUrl}`
                            : 'https://placehold.co/600x400/1a1a1a/ffffff.png'
                    }}
                    className='w-full h-52 rounded-lg'
                    resizeMode='cover'
                />
                <Text className='text-sm font-bold text-white mt-2'>{fullName}</Text>

                <View className='flex-row items-center justify-start gap-x-1'>
                    <Text className='text-xs text-white' numberOfLines={1}>{title}</Text>
                    <Image source={icons.star} className='size-4'/>
                </View>

            </TouchableOpacity>
        </Link>
    );
};

export default MovieCard;
