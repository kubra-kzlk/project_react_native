/**
 * Hoofdscherm voor de coffee collectie.
 * Toont lijst van coffee met zoek- en filterfunctionaliteit.
 */
import React, { useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View } from 'react-native';
import { useRouter } from 'expo-router';
import { GlassWater, Coffee, CirclePlus, Eye } from 'lucide-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "@/src/styles/styles";
import SearchInput from "@/src/components/ui/input/SearchInput";
import useCollection from "@/src/hooks/coffee/useCollection";
import LoadingSpinner from "@/src/components/ui/feedback/LoadingSpinner";
import CoffeesList from "@/src/components/features/coffee/coffees/list/CoffeesList";
import ActionButtons from "@/src/components/features/manga/ui/buttons/ActionButtons";

const HomeScreen = () => {

  // const router = useRouter();
  // const [recentlyViewed, setRecentlyViewed] = useState<Coffee[]>([]);
  // const [isLoading, setIsLoading] = useState(true); //bundling page

  // // Clear AsyncStorage and reset state on reload
  // useEffect(() => {
  //   const resetAppData = async () => { await AsyncStorage.clear(); };
  //   resetAppData();
  // }, []);  // This will run only once when the component mounts

  // useFocusEffect(//fetch recently viewed data when screen is focused 
  //   React.useCallback(() => {
  //     const saveToRecentCoffees = async () => {
  //       const storedCoffees = await AsyncStorage.getItem('recentlyViewed');
  //       if (storedCoffees) { setRecentlyViewed(JSON.parse(storedCoffees).slice(0, 3)); }
  //     };
  //     saveToRecentCoffees();
  //   }, [])
  // );

  // // Render coffee name in FlatList
  // const renderCoffee = ({ item }: { item: Coffee }) => (
  //   <TouchableOpacity onPress={() => router.push(`/CoffeeDetail?id=${item.id}&type=hot`)}>
  //     <View><Text style={styles.headerSubtitle}>{item.title}</Text></View >
  //   </TouchableOpacity>);

  // useEffect(() => {
  //   const timer = setTimeout(() => setIsLoading(false), 1000); // Simulate loading
  //   return () => clearTimeout(timer);
  // }, []);

  // if (isLoading) {
  //   return (<View style={styles.container}> <Image source={require('../assets/images/tr_logo.png')} style={styles.applogo} /> </View>);
  // }
  const {
    filteredCoffees,
    isLoading,
    searchQuery,
    setSearchQuery,
    handleSeriesPress,
    toggleStatsModal,
    handleShare,
    reloadCoffees
  } = useCollection();

  if (isLoading) return <LoadingSpinner />;

  return (
    <View style={styles.container}>
      <SearchInput
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search series..."
      />

      <CoffeesList
        series={filteredCoffees}
        onSeriesPress={handleSeriesPress}
        onRefresh={reloadCoffees}
        isLoading={isLoading}
      />

      <ActionButtons
        onStatsPress={toggleStatsModal}
        onSharePress={handleShare}
      />
    </View>
    // <SafeAreaView style={styles.container}>
    //   <ImageBackground
    //     source={require('../assets/images/cpus.jpeg')}
    //     style={styles.backgroundImage}>
    //     <View style={styles.headerContainer}>
    //       <Text style={styles.headerTitle}>COFFEE CONNECT</Text>
    //       <View style={styles.logoContainer}> <Image source={require('../assets/images/tr_logo.png')} style={styles.logo} /> </View>
    //     </View>
    //     <View style={styles.recentlyViewedContainer}>
    //       <View>
    //         <Text style={styles.headerSubtitle}>
    //           <Eye size={20} color="#402024" />
    //           {' '}  Recently viewed coffees:
    //         </Text>
    //       </View>
    //       {recentlyViewed.length === 0 ? (
    //         <View><Text style={styles.headerSubtitle}>No recently viewed coffees</Text></View>) : (
    //         <FlatList
    //           data={recentlyViewed}
    //           keyExtractor={(item) => item.id}
    //           renderItem={renderCoffee} />)}
    //     </View>
    //     <View style={styles.buttonsContainer}>
    //       <TouchableOpacity
    //         style={styles.button}
    //         onPress={() => router.push({ pathname: '/CoffeeList', params: { type: 'hot' } })} >
    //         <View >
    //           <Text style={styles.buttonText}>
    //             <Coffee size={22} color="#402024" />   Hot coffees</Text>
    //         </View>
    //       </TouchableOpacity>
    //       <TouchableOpacity
    //         style={styles.button}
    //         onPress={() => router.push({ pathname: '/CoffeeList', params: { type: 'iced' } })}>
    //         <View>
    //           <Text style={styles.buttonText}>
    //             <GlassWater size={22} color="#402024" />   Iced coffees</Text>
    //         </View>
    //       </TouchableOpacity>
    //       <TouchableOpacity
    //         style={styles.button}
    //         onPress={() => router.push('/AddCoffee')}>
    //         <View>
    //           <Text style={styles.buttonText}> <CirclePlus size={22} color="#402024" />   Add coffee</Text>
    //         </View>
    //       </TouchableOpacity>
    //     </View>
    //   </ImageBackground>
    // </SafeAreaView>
  );
}
export default HomeScreen;


