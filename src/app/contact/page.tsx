'use client'

import { Mail, Phone, MapPin, MessageCircle, Clock, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("Thank you for your message! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8 text-blue-600" />,
      title: "Email Support",
      description: "Get help via email",
      contact: "support@restfree.com",
      bgColor: "bg-blue-50"
    },
    {
      icon: (
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100">
          <Phone className="w-8 h-8 text-green-500" />
        </span>
      ),
      title: "Phone Support",
      description: "Call us directly",
      contact: "+91-9876-543210",
      bgColor: "bg-green-50"
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-purple-600" />,
      title: "Live Chat",
      description: "Chat with our team",
      contact: "Available 24/7",
      bgColor: "bg-purple-50"
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-600" />,
      title: "Business Hours",
      description: "Mon-Fri: 9AM-6PM IST",
      contact: "Sat-Sun: 10AM-4PM IST",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Get in <span className="text-green-600">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions, feedback, or need support? We're here to help you 24/7
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <div
              key={method.title}
              className={`group flex flex-col items-center bg-gradient-to-br from-blue-100 via-emerald-50 to-white rounded-2xl p-6 md:p-8 text-center relative shadow-lg animate-fade-in-up transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-2 border-transparent hover:border-emerald-400 shine-effect cursor-pointer`}
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'both',
              }}
            >
              <span className="shine-anim" />
              <div className={`w-12 h-12 flex items-center justify-center mb-4 ${method.bgColor} rounded-full transition-transform duration-300 group-hover:scale-110`}>
                {method.icon}
              </div>
              <div className="text-lg font-semibold mb-2">{method.title}</div>
              <div className="text-gray-600 mb-2">{method.description}</div>
              <div className="font-medium text-gray-800 leading-relaxed">{method.contact}</div>
            </div>
          ))}
        </div>

        {/* Contact Form and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="group bg-gradient-to-br from-blue-100 via-emerald-50 to-white rounded-2xl shadow-lg animate-fade-in-up transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-2 border-transparent hover:border-emerald-400 shine-effect">
            <span className="shine-anim" />
            <div className="p-8">
              <div className="mb-6">
                <div className="text-2xl font-bold text-gray-800 mb-1">Send us a Message</div>
                <div className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible</div>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Office Location */}
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800">
                Our Office
              </CardTitle>
              <CardDescription>
                Visit us at our headquarters or reach out digitally
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Address</h3>
                  <p className="text-gray-600">
                    123 Tech Park, Sector 44<br />
                    Gurgaon, Haryana 122001<br />
                    India
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-6">
                <h3 className="font-semibold text-gray-800 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => alert("Report feature coming soon!")}
                  >
                    🚨 Report a Place
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => alert("Suggestion feature coming soon!")}
                  >
                    💡 Suggest New Location
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => alert("Partnership inquiries: partnerships@restfree.com")}
                  >
                    🤝 Partnership Inquiry
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="bg-green-50 rounded-lg p-8 animate-fade-in">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "How do I list my business?",
                answer: "Click on the 'Merchant' button in the header to register your business."
              },
              {
                question: "Is restfree free to use?",
                answer: "Yes, finding and using basic features is completely free for users."
              },
              {
                question: "How do you verify locations?",
                answer: "We manually verify each location through on-site visits and user feedback."
              },
              {
                question: "Can I book hotels by the hour?",
                answer: "Yes, select hotels offer hourly booking options for short stays."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-green-600 text-white py-6 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Restfree. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
