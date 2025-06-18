import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Chrome as Home, TrendingUp, Users, Calendar, ChevronRight, Star } from 'lucide-react-native';

export default function HomeScreen() {
  const quickActions = [
    { title: 'Dashboard', icon: Home, color: '#007AFF' },
    { title: 'Analytics', icon: TrendingUp, color: '#34C759' },
    { title: 'Team', icon: Users, color: '#FF9500' },
    { title: 'Schedule', icon: Calendar, color: '#5856D6' },
  ];

  const recentActivities = [
    { title: 'Welcome to the app!', time: 'Just now', type: 'info' },
    { title: 'Profile setup completed', time: '2 min ago', type: 'success' },
    { title: 'New feature available', time: '1 hour ago', type: 'feature' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <LinearGradient
          colors={['#007AFF', '#5856D6']}
          className="pb-10 -mb-5"
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View className="flex-row justify-between items-center px-5 pt-5">
            <View>
              <Text className="text-2xl font-bold text-white mb-1">Welcome back!</Text>
              <Text className="text-base text-white/90">Let's get things done today</Text>
            </View>
            <TouchableOpacity className="p-0.5">
              <View className="w-11 h-11 rounded-full bg-white/20 justify-center items-center">
                <Text className="text-lg font-semibold text-white">U</Text>
              </View>
            </TouchableOpacity>
          </View>
        </LinearGradient>

        {/* Quick Actions */}
        <View className="px-5 mb-8">
          <Text className="text-xl font-bold text-gray-900 mb-4">Quick Actions</Text>
          <View className="flex-row flex-wrap justify-between">
            {quickActions.map((action, index) => (
              <TouchableOpacity key={index} className="w-[48%] bg-white rounded-2xl p-5 items-center mb-3 shadow-sm" activeOpacity={0.8}>
                <View className="w-12 h-12 rounded-full justify-center items-center mb-3" style={{ backgroundColor: action.color }}>
                  <action.icon size={24} color="white" />
                </View>
                <Text className="text-sm font-semibold text-gray-900 text-center">{action.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Stats Cards */}
        <View className="px-5 mb-8">
          <Text className="text-xl font-bold text-gray-900 mb-4">Overview</Text>
          <View className="flex-row justify-between">
            <View className="flex-1 bg-white rounded-2xl p-6 items-center mx-1.5 shadow-sm">
              <Text className="text-3xl font-bold text-blue-500 mb-1">12</Text>
              <Text className="text-sm text-gray-500 text-center">Tasks Completed</Text>
            </View>
            <View className="flex-1 bg-white rounded-2xl p-6 items-center mx-1.5 shadow-sm">
              <Text className="text-3xl font-bold text-blue-500 mb-1">8</Text>
              <Text className="text-sm text-gray-500 text-center">Projects Active</Text>
            </View>
          </View>
        </View>

        {/* Recent Activity */}
        <View className="px-5 mb-8">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-xl font-bold text-gray-900">Recent Activity</Text>
            <TouchableOpacity className="flex-row items-center">
              <Text className="text-base text-blue-500 font-medium mr-1">See All</Text>
              <ChevronRight size={16} color="#007AFF" />
            </TouchableOpacity>
          </View>
          
          <View className="bg-white rounded-2xl shadow-sm">
            {recentActivities.map((activity, index) => (
              <View key={index} className={`flex-row items-center p-4 ${index !== recentActivities.length - 1 ? 'border-b border-gray-100' : ''}`}>
                <View className="w-8 h-8 rounded-2xl bg-blue-50 justify-center items-center mr-3">
                  <Star size={16} color="#007AFF" />
                </View>
                <View className="flex-1">
                  <Text className="text-base font-medium text-gray-900 mb-0.5">{activity.title}</Text>
                  <Text className="text-sm text-gray-500">{activity.time}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

