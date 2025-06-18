import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CreditCard as Edit, Mail, Phone, MapPin, Calendar, Award, Star, ChevronRight } from 'lucide-react-native';

export default function ProfileScreen() {
  const profileStats = [
    { label: 'Tasks Completed', value: '127', color: '#34C759' },
    { label: 'Projects', value: '8', color: '#007AFF' },
    { label: 'Team Members', value: '24', color: '#FF9500' },
  ];

  const profileActions = [
    { title: 'Edit Profile', icon: Edit, color: '#007AFF' },
    { title: 'Achievements', icon: Award, color: '#34C759' },
    { title: 'Reviews', icon: Star, color: '#FF9500' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Profile Header */}
        <LinearGradient
          colors={['#007AFF', '#5856D6']}
          className="pb-10 -mb-5"
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View className="items-center px-5 pt-10">
            <View className="relative mb-4">
              <View className="w-28 h-28 rounded-full bg-white/20 justify-center items-center border-4 border-white">
                <Text className="text-4xl font-bold text-white">JD</Text>
              </View>
              <TouchableOpacity className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-blue-500 justify-center items-center border-2 border-white">
                <Edit size={16} color="white" />
              </TouchableOpacity>
            </View>
            
            <Text className="text-3xl font-bold text-white mb-1">John Doe</Text>
            <Text className="text-base text-white/90 mb-6">Product Manager</Text>
            
            <TouchableOpacity className="bg-white/20 rounded-2xl px-6 py-3 border border-white/30">
              <Text className="text-white text-base font-medium">Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>

        {/* Profile Stats */}
        <View className="px-5 mb-8">
          <View className="flex-row bg-white rounded-2xl p-5 shadow-sm">
            {profileStats.map((stat, index) => (
              <View key={index} className="flex-1 items-center">
                <Text className="text-2xl font-bold mb-1" style={{ color: stat.color }}>
                  {stat.value}
                </Text>
                <Text className="text-xs text-gray-500 text-center">{stat.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Profile Information */}
        <View className="px-5 mb-8">
          <Text className="text-xl font-bold text-gray-900 mb-4">Information</Text>
          
          <View className="bg-white rounded-2xl shadow-sm">
            <View className="flex-row items-center p-4 border-b border-gray-100">
              <View className="w-10 h-10 rounded-2xl bg-gray-100 justify-center items-center mr-3">
                <Mail size={20} color="#007AFF" />
              </View>
              <View className="flex-1">
                <Text className="text-sm text-gray-500 mb-0.5">Email</Text>
                <Text className="text-base font-medium text-gray-900">john.doe@example.com</Text>
              </View>
            </View>
            
            <View className="flex-row items-center p-4 border-b border-gray-100">
              <View className="w-10 h-10 rounded-2xl bg-gray-100 justify-center items-center mr-3">
                <Phone size={20} color="#34C759" />
              </View>
              <View className="flex-1">
                <Text className="text-sm text-gray-500 mb-0.5">Phone</Text>
                <Text className="text-base font-medium text-gray-900">+1 (555) 123-4567</Text>
              </View>
            </View>
            
            <View className="flex-row items-center p-4 border-b border-gray-100">
              <View className="w-10 h-10 rounded-2xl bg-gray-100 justify-center items-center mr-3">
                <MapPin size={20} color="#FF9500" />
              </View>
              <View className="flex-1">
                <Text className="text-sm text-gray-500 mb-0.5">Location</Text>
                <Text className="text-base font-medium text-gray-900">San Francisco, CA</Text>
              </View>
            </View>
            
            <View className="flex-row items-center p-4">
              <View className="w-10 h-10 rounded-2xl bg-gray-100 justify-center items-center mr-3">
                <Calendar size={20} color="#5856D6" />
              </View>
              <View className="flex-1">
                <Text className="text-sm text-gray-500 mb-0.5">Joined</Text>
                <Text className="text-base font-medium text-gray-900">January 2024</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Quick Actions */}
        <View className="px-5 mb-8">
          <Text className="text-xl font-bold text-gray-900 mb-4">Quick Actions</Text>
          
          <View className="bg-white rounded-2xl shadow-sm">
            {profileActions.map((action, index) => (
              <TouchableOpacity
                key={index}
                className={`flex-row items-center p-4 ${index !== profileActions.length - 1 ? 'border-b border-gray-100' : ''}`}
                activeOpacity={0.8}
              >
                <View className="w-10 h-10 rounded-2xl justify-center items-center mr-3" style={{ backgroundColor: action.color }}>
                  <action.icon size={24} color="white" />
                </View>
                <Text className="flex-1 text-base font-medium text-gray-900">{action.title}</Text>
                <ChevronRight size={20} color="#8E8E93" />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Recent Activity */}
        <View className="px-5 mb-8">
          <Text className="text-xl font-bold text-gray-900 mb-4">Recent Activity</Text>
          
          <View className="bg-white rounded-2xl shadow-sm">
            <View className="flex-row items-center p-4 border-b border-gray-100">
              <View className="w-2 h-2 rounded-full bg-blue-500 mr-3" />
              <View className="flex-1">
                <Text className="text-sm font-medium text-gray-900 mb-0.5">Completed Project Alpha</Text>
                <Text className="text-xs text-gray-500">2 hours ago</Text>
              </View>
            </View>
            
            <View className="flex-row items-center p-4 border-b border-gray-100">
              <View className="w-2 h-2 rounded-full bg-blue-500 mr-3" />
              <View className="flex-1">
                <Text className="text-sm font-medium text-gray-900 mb-0.5">Updated profile information</Text>
                <Text className="text-xs text-gray-500">1 day ago</Text>
              </View>
            </View>
            
            <View className="flex-row items-center p-4">
              <View className="w-2 h-2 rounded-full bg-blue-500 mr-3" />
              <View className="flex-1">
                <Text className="text-sm font-medium text-gray-900 mb-0.5">Joined team meeting</Text>
                <Text className="text-xs text-gray-500">3 days ago</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}