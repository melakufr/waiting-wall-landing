


'use client'
import { useState } from 'react';
import { Search, HelpCircle, Mail, ArrowLeft } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { Input } from './ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { EMAIL_SUPPORT } from '@/lib/const';
import Link from 'next/link';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: '1',
    question: 'Are posts really deleted?',
    answer: 'Yes, after 24 hours posts vanish from the wall.',
  },
  {
    id: '2',
    question: 'Can I post anonymously?',
    answer: 'Yes, you can toggle between username and anonymous.',
  },
  {
    id: '3',
    question: 'Is this the final version?',
    answer: 'No — this is a prototype. Features may change as we test and grow.',
  },
  {
    id: '4',
    question: 'Will my data be safe?',
    answer: 'Yes. We only collect minimal info (your email). No spam, no selling.',
  }
];

export function FAQSection() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFAQs = faqData.filter((faq) => {
    return faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
           faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
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
              Find answers to common questions about WaitingWall.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search */}
        <div className="mb-8">
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
        </div>

        {/* FAQ Results Count */}
        <div className="mb-6">
          <p className="text-sm text-gray-600">
            {filteredFAQs.length} questions found
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
                      <div className="font-medium text-gray-900 text-left">
                        {faq.question}
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
                  Try adjusting your search terms.
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Contact Support */}
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-blue-900">Still Need Help?</CardTitle>
            <CardDescription className="text-blue-700 text-base">
              Contact us directly with any questions.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2 text-blue-700">
                <Mail className="h-5 w-5" />
                <span>{EMAIL_SUPPORT}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}