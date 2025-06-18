import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Bell, Settings, Check, X } from 'lucide-react-native';

export default function NotificationsScreen() {
  const notifications = [
    {
      id: 1,
      title: 'Welcome to the app!',
      message: 'Get started by exploring all the amazing features we have to offer.',
      time: '2 min ago',
      read: false,
      type: 'info',
    },
    {
      id: 2,
      title: 'Profile Updated',
      message: 'Your profile information has been successfully updated.',
      time: '1 hour ago',
      read: false,
      type: 'success',
    },
    {
      id: 3,
      title: 'New Feature Available',
      message: 'Check out the new dashboard analytics feature.',
      time: '2 hours ago',
      read: true,
      type: 'feature',
    },
    {
      id: 4,
      title: 'Reminder',
      message: 'Don\'t forget to complete your daily tasks.',
      time: '1 day ago',
      read: true,
      type: 'reminder',
    },
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <Check size={20} color="#34C759" />;
      case 'info':
      case 'feature':
        return <Bell size={20} color="#007AFF" />;
      default:
        return <Bell size={20} color="#8E8E93" />;
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="flex-row justify-between items-center px-5 pt-5 pb-4 bg-white border-b border-gray-200">
        <Text className="text-2xl font-bold text-gray-900">Notifications</Text>
        <TouchableOpacity className="p-2">
          <Settings size={24} color="#007AFF" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-5 pt-6">
          <Text className="text-lg font-semibold text-gray-900 mb-4">Recent</Text>
          
          {notifications.map((notification) => (
            <TouchableOpacity
              key={notification.id}
              className={`bg-white rounded-2xl p-4 mb-3 flex-row items-start shadow-sm ${
                !notification.read ? 'border-l-4 border-blue-500' : ''
              }`}
              activeOpacity={0.8}
            >
              <View className="w-10 h-10 rounded-2xl bg-gray-100 justify-center items-center mr-3">
                {getNotificationIcon(notification.type)}
              </View>
              
              <View className="flex-1">
                <View className="flex-row items-center mb-1">
                  <Text className={`text-base text-gray-900 flex-1 ${
                    !notification.read ? 'font-semibold' : 'font-medium'
                  }`}>
                    {notification.title}
                  </Text>
                  {!notification.read && <View className="w-2 h-2 rounded-full bg-blue-500" />}
                </View>
                
                <Text className="text-sm text-gray-500 leading-5 mb-2">
                  {notification.message}
                </Text>
                
                <Text className="text-xs text-gray-400">
                  {notification.time}
                </Text>
              </View>
              
              <TouchableOpacity className="p-2 -mt-1">
                <X size={16} color="#8E8E93" />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>

        <View className="px-5 py-6 gap-3">
          <TouchableOpacity className="bg-blue-500 rounded-2xl py-4 items-center">
            <Text className="text-white text-base font-semibold">Mark All as Read</Text>
          </TouchableOpacity>
          
          <TouchableOpacity className="bg-white rounded-2xl py-4 items-center border border-gray-200">
            <Text className="text-red-500 text-base font-medium">Clear All</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}