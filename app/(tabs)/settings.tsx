import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { User, Bell, Shield, Moon, Globe, CircleHelp as HelpCircle, LogOut, ChevronRight, Smartphone, Lock } from 'lucide-react-native';

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);
  const [biometricEnabled, setBiometricEnabled] = React.useState(true);

  const settingsGroups = [
    {
      title: 'Account',
      items: [
        { title: 'Profile Settings', icon: User, action: 'navigate', color: '#007AFF' },
        { title: 'Privacy & Security', icon: Shield, action: 'navigate', color: '#34C759' },
        { title: 'Biometric Authentication', icon: Lock, action: 'toggle', value: biometricEnabled, onChange: setBiometricEnabled, color: '#FF9500' },
      ],
    },
    {
      title: 'Preferences',
      items: [
        { title: 'Notifications', icon: Bell, action: 'toggle', value: notificationsEnabled, onChange: setNotificationsEnabled, color: '#5856D6' },
        { title: 'Dark Mode', icon: Moon, action: 'toggle', value: darkModeEnabled, onChange: setDarkModeEnabled, color: '#8E8E93' },
        { title: 'Language', icon: Globe, action: 'navigate', subtitle: 'English', color: '#007AFF' },
        { title: 'App Version', icon: Smartphone, action: 'info', subtitle: '1.0.0', color: '#34C759' },
      ],
    },
    {
      title: 'Support',
      items: [
        { title: 'Help Center', icon: HelpCircle, action: 'navigate', color: '#FF9500' },
        { title: 'Contact Support', icon: HelpCircle, action: 'navigate', color: '#5856D6' },
      ],
    },
    {
      title: 'Account Actions',
      items: [
        { title: 'Sign Out', icon: LogOut, action: 'signout', color: '#FF3B30' },
      ],
    },
  ];

  const handleSettingPress = (item: any) => {
    if (item.action === 'signout') {
      console.log('Sign out pressed');
    } else if (item.action === 'navigate') {
      console.log(`Navigate to ${item.title}`);
    }
  };

  const renderSettingItem = (item: any, index: number, isLast: boolean) => {
    return (
      <TouchableOpacity
        key={index}
        className={`flex-row items-center p-4 ${!isLast ? 'border-b border-gray-100' : ''}`}
        onPress={() => handleSettingPress(item)}
        activeOpacity={item.action === 'info' ? 1 : 0.7}
      >
        <View className="w-8 h-8 rounded-2xl justify-center items-center mr-3" style={{ backgroundColor: item.color }}>
          <item.icon size={20} color="white" />
        </View>
        
        <View className="flex-1">
          <Text className={`text-base font-medium ${item.action === 'signout' ? 'text-red-500' : 'text-gray-900'}`}>
            {item.title}
          </Text>
          {item.subtitle && (
            <Text className="text-sm text-gray-500 mt-0.5">{item.subtitle}</Text>
          )}
        </View>
        
        {item.action === 'toggle' ? (
          <Switch
            value={item.value}
            onValueChange={item.onChange}
            trackColor={{ false: '#E5E5EA', true: '#007AFF' }}
            thumbColor="white"
          />
        ) : item.action === 'navigate' || item.action === 'signout' ? (
          <ChevronRight size={20} color="#8E8E93" />
        ) : null}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="px-5 pt-5 pb-4 bg-white border-b border-gray-200">
        <Text className="text-2xl font-bold text-gray-900">Settings</Text>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* User Profile Summary */}
        <View className="flex-row items-center bg-white m-5 p-5 rounded-2xl shadow-sm">
          <View className="w-16 h-16 rounded-full bg-blue-500 justify-center items-center mr-4">
            <Text className="text-2xl font-bold text-white">JD</Text>
          </View>
          <View className="flex-1">
            <Text className="text-lg font-semibold text-gray-900 mb-1">John Doe</Text>
            <Text className="text-sm text-gray-500">john.doe@example.com</Text>
          </View>
          <TouchableOpacity className="bg-gray-100 rounded-2xl px-4 py-2">
            <Text className="text-sm font-medium text-blue-500">Edit</Text>
          </TouchableOpacity>
        </View>

        {/* Settings Groups */}
        {settingsGroups.map((group, groupIndex) => (
          <View key={groupIndex} className="px-5 mb-6">
            <Text className="text-base font-semibold text-gray-900 mb-3 uppercase tracking-wide">
              {group.title}
            </Text>
            <View className="bg-white rounded-2xl shadow-sm">
              {group.items.map((item, itemIndex) =>
                renderSettingItem(item, itemIndex, itemIndex === group.items.length - 1)
              )}
            </View>
          </View>
        ))}

        {/* App Info */}
        <View className="items-center py-8 px-5">
          <Text className="text-sm text-gray-500 text-center mb-2">
            Made with ❤️ for mobile productivity
          </Text>
          <Text className="text-xs text-gray-400">Version 1.0.0</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}