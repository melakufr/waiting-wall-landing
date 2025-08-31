'use client'
import { useState } from 'react';
import { Search, HelpCircle, Mail, Phone, MessageCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  tags: string[];
}

const faqData: FAQItem[] = [
  {
    id: '1',
    question: 'What is your return policy?',
    answer: 'We offer a 30-day return policy for all products. Items must be in original condition with all packaging and tags attached. Simply contact our customer service team to initiate a return, and we\'ll provide you with a prepaid shipping label.',
    category: 'General',
    tags: ['returns', 'policy', 'refund']
  },
  {
    id: '2',
    question: 'How long does shipping take?',
    answer: 'Standard shipping takes 3-5 business days within the continental US. Express shipping (1-2 business days) and overnight shipping options are also available. International shipping typically takes 7-14 business days depending on the destination.',
    category: 'General',
    tags: ['shipping', 'delivery', 'time']
  },
  {
    id: '3',
    question: 'How do I reset my password?',
    answer: 'To reset your password, go to the login page and click "Forgot Password". Enter your email address and we\'ll send you a secure link to create a new password. The link expires after 24 hours for security reasons.',
    category: 'Account',
    tags: ['password', 'reset', 'login', 'security']
  },
  {
    id: '4',
    question: 'Can I change my email address?',
    answer: 'Yes, you can update your email address in your account settings. Go to Profile > Account Settings > Email Address. You\'ll need to verify the new email address before the change takes effect.',
    category: 'Account',
    tags: ['email', 'change', 'profile', 'settings']
  },
  {
    id: '5',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, Google Pay, and bank transfers for enterprise customers. All payments are processed securely using industry-standard encryption.',
    category: 'Billing',
    tags: ['payment', 'credit card', 'paypal', 'billing']
  },
  {
    id: '6',
    question: 'How do I update my billing information?',
    answer: 'You can update your billing information in your account dashboard under "Billing & Payments". Changes take effect immediately for future purchases. For security, we don\'t store complete credit card numbers.',
    category: 'Billing',
    tags: ['billing', 'payment', 'update', 'credit card']
  },
  {
    id: '7',
    question: 'Why is my website loading slowly?',
    answer: 'Slow loading can be caused by several factors: large image files, too many plugins, server location, or browser cache issues. Try clearing your browser cache first, optimize your images, and check if you have too many active plugins.',
    category: 'Technical',
    tags: ['performance', 'slow', 'loading', 'website']
  },
  {
    id: '8',
    question: 'How do I backup my data?',
    answer: 'We automatically backup all data daily. You can also create manual backups anytime from your dashboard under "Settings > Backup". Backups are stored securely for 30 days and can be restored with one click.',
    category: 'Technical',
    tags: ['backup', 'data', 'restore', 'security']
  },
  {
    id: '9',
    question: 'Do you offer API access?',
    answer: 'Yes, we provide RESTful API access for all premium plans. API documentation is available in your developer dashboard. Rate limits apply based on your plan tier. Enterprise customers get dedicated API support.',
    category: 'Technical',
    tags: ['api', 'integration', 'developer', 'rest']
  },
  {
    id: '10',
    question: 'Is there a mobile app available?',
    answer: 'Yes, our mobile apps are available for both iOS and Android. Download them from the App Store or Google Play Store. The mobile app syncs seamlessly with your web account and includes all core features.',
    category: 'General',
    tags: ['mobile', 'app', 'ios', 'android']
  }
];

const categories = ['All', 'General', 'Account', 'Billing', 'Technical'];

export function FAQSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredFAQs = faqData.filter((faq) => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <HelpCircle className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our products and services. 
              Can't find what you're looking for? We're here to help!
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-200"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* FAQ Results Count */}
        <div className="mb-6">
          <p className="text-sm text-gray-600">
            Showing {filteredFAQs.length} of {faqData.length} questions
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </div>

        {/* FAQ Accordion */}
        <Card className="mb-8">
          <CardContent className="p-0">
            {filteredFAQs.length > 0 ? (
              <Accordion type="single" collapsible className="w-full">
                {filteredFAQs.map((faq, index) => (
                  <AccordionItem 
                    key={faq.id} 
                    value={faq.id}
                    className={index === filteredFAQs.length - 1 ? "border-b-0" : ""}
                  >
                    <AccordionTrigger className="px-6 py-4 text-left hover:bg-gray-50 transition-colors">
                      <div className="flex flex-col items-start gap-2 text-left">
                        <div className="font-medium text-gray-900">{faq.question}</div>
                        <div className="flex gap-2 flex-wrap">
                          <Badge variant="secondary" className="text-xs">
                            {faq.category}
                          </Badge>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <div className="p-8 text-center">
                <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No FAQs found</h3>
                <p className="text-gray-600">
                  Try adjusting your search terms or selecting a different category.
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Contact Support Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-md transition-shadow duration-200">
            <CardHeader className="text-center">
              <div className="p-3 bg-blue-100 rounded-full w-fit mx-auto mb-2">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-lg">Email Support</CardTitle>
              <CardDescription>
                Get help via email within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <Button className="w-full" variant="outline">
                Send Email
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow duration-200">
            <CardHeader className="text-center">
              <div className="p-3 bg-green-100 rounded-full w-fit mx-auto mb-2">
                <MessageCircle className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="text-lg">Live Chat</CardTitle>
              <CardDescription>
                Chat with our team in real-time
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <Button className="w-full" variant="outline">
                Start Chat
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow duration-200">
            <CardHeader className="text-center">
              <div className="p-3 bg-purple-100 rounded-full w-fit mx-auto mb-2">
                <Phone className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle className="text-lg">Phone Support</CardTitle>
              <CardDescription>
                Call us Monday-Friday, 9AM-6PM EST
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <Button className="w-full" variant="outline">
                (555) 123-4567
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Help Section */}
        <Card className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-blue-900">Still Need Help?</CardTitle>
            <CardDescription className="text-blue-700 text-base">
              Our support team is ready to assist you with any questions not covered in our FAQ.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Contact Support
              </Button>
              <Button size="lg" variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                Browse Help Center
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}