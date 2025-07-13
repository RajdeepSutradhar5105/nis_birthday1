"use client"

import { useState, useEffect } from "react"
import { Heart, Dumbbell, Star, Gift, Cake, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function BirthdayWish() {
  const [showConfetti, setShowConfetti] = useState(false)
  const [catMood, setCatMood] = useState("happy")

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleCelebrate = () => {
    setShowConfetti(true)
    setCatMood("excited")
    setTimeout(() => setCatMood("happy"), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 overflow-hidden relative">
      {/* Floating Hearts Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className={`absolute text-amber-600 animate-float opacity-60`}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              fontSize: `${12 + Math.random() * 8}px`,
            }}
          />
        ))}
      </div>

      {/* Confetti Effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-600 animate-confetti rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-bounce-in">
          <div className="flex justify-center items-center gap-4 mb-4">
            <Cake className="text-amber-700 w-8 h-8 animate-wiggle" />
            <h1 className="text-6xl font-bold bg-gradient-to-r from-amber-700 to-orange-800 bg-clip-text text-transparent">
              Happy Birthday
            </h1>
            <Cake className="text-amber-700 w-8 h-8 animate-wiggle" />
          </div>
          <h2 className="text-4xl font-bold text-amber-900 mb-2 animate-pulse">Nishita Shah! 🎉</h2>
          <p className="text-xl text-amber-800">July 18th - Your Special Day!</p>
        </div>

        {/* Photo Gallery Section */}
        <div className="mb-12">
          <Card className="bg-gradient-to-r from-amber-100/80 to-orange-100/80 backdrop-blur-sm border-amber-300 shadow-xl">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Camera className="w-8 h-8 text-amber-700 mx-auto mb-4 animate-bounce-slow" />
                <h3 className="text-3xl font-bold text-amber-900 mb-2">Beautiful Memories 📸</h3>
                <p className="text-amber-800">Celebrating the amazing Nishita!</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {/* Photo placeholders - replace with actual photos */}
                <div className="relative group">
                  <div className="aspect-square bg-gradient-to-br from-amber-200 to-orange-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                    <img src="/images/gym.jpg" alt="Nishita - Gym Queen" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
                    <p className="text-xs text-white font-bold">🏋️‍♀️ Gym Queen 🏋️‍♀️</p>
                  </div>
                </div>

                <div className="relative group">
                  <div className="aspect-square bg-gradient-to-br from-orange-200 to-amber-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                    <img src="/images/cat.jpg" alt="Nishita - Cat Lover" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
                    <p className="text-xs text-white font-bold">😻 Cat Lover 😻</p>
                  </div>
                </div>

                <div className="relative group">
                  <div className="aspect-square bg-gradient-to-br from-amber-200 to-orange-300 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                    <img
                      src="/images/shining.jpg"
                      alt="Nishita - Shining Star"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
                    <p className="text-xs text-white font-bold">✨ Shining Star ✨</p>
                  </div>
                </div>

                <div className="relative group">
                  <div className="aspect-square bg-gradient-to-br from-orange-200 to-amber-300 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                    <img src="/images/friend.jpg" alt="Nishita with Friend" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
                    <p className="text-xs text-white font-bold">🌟 Amazing Friend 🌟</p>
                  </div>
                </div>
              </div>

              {/* Larger featured photo placeholder */}
              <div className="relative group max-w-md mx-auto">
                <div className="aspect-[3/4] bg-gradient-to-br from-amber-200 to-orange-200 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                  <img
                    src="/images/11.jpg"
                    alt="Nishita - Birthday Girl"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <p className="text-lg text-white font-bold drop-shadow-lg">🎂 Birthday Girl! 🎂</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* Gym Cat Card */}
          <Card className="bg-gradient-to-br from-amber-100/90 to-orange-100/90 backdrop-blur-sm border-amber-300 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="relative inline-block">
                  <div className="text-8xl animate-bounce-slow">🐱</div>
                  <Dumbbell className="absolute -top-2 -right-2 text-amber-700 w-6 h-6 animate-spin-slow" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-amber-900 mb-4">Fitness Kitty! 💪</h3>
              <p className="text-amber-800 mb-4">
                You're the purrfect combination of strength and cuteness! Keep crushing those workouts like the fierce
                feline you are! 🏋️‍♀️
              </p>
              <div className="flex justify-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-yellow-600 w-5 h-5 animate-twinkle"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Cat Lover Card */}
          <Card className="bg-gradient-to-br from-orange-100/90 to-amber-100/90 backdrop-blur-sm border-amber-300 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="flex justify-center gap-2">
                  <div className="text-4xl animate-wiggle">🐾</div>
                  <div className="text-6xl animate-bounce-slow">😻</div>
                  <div className="text-4xl animate-wiggle" style={{ animationDelay: "0.5s" }}>
                    🐾
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-amber-900 mb-4">Cat Whisperer! 🐈</h3>
              <p className="text-amber-800 mb-4">
                Your love for cats is absolutely adorable! May your day be filled with purrs, cuddles, and all the
                feline love in the world! 🥰
              </p>
              <div className="flex justify-center gap-1">
                {["🐱", "😸", "😺", "😻", "🙀"].map((cat, i) => (
                  <span key={i} className="text-2xl animate-bounce" style={{ animationDelay: `${i * 0.3}s` }}>
                    {cat}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Interactive Section */}
        <div className="text-center mb-12">
          <Card className="bg-gradient-to-r from-amber-100/95 to-orange-100/95 backdrop-blur-sm border-amber-300 shadow-xl max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="mb-6">
                <div
                  className={`text-8xl transition-all duration-500 ${catMood === "excited" ? "animate-spin" : "animate-bounce-slow"}`}
                >
                  {catMood === "excited" ? "🤸‍♀️" : "🎂"}
                </div>
              </div>
              <h3 className="text-3xl font-bold text-amber-900 mb-4">Make a Birthday Wish! ✨</h3>
              <p className="text-amber-800 mb-6">
                Click the button below to celebrate with virtual confetti and watch the magic happen!
              </p>
              <Button
                onClick={handleCelebrate}
                className="bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-700 hover:to-orange-800 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Gift className="w-5 h-5 mr-2" />
                Celebrate Nishita! 🎉
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Birthday Message */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-amber-200/40 to-orange-200/40 backdrop-blur-sm border-amber-400 shadow-xl max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold text-amber-900 mb-6">Special Birthday Message 💝</h3>
              <p className="text-lg text-amber-800 leading-relaxed mb-4">
                Dear Nishita, on your special day, may you continue to inspire everyone around you with your dedication
                to fitness and your loving heart for all creatures, especially cats!
              </p>
              <p className="text-lg text-amber-800 leading-relaxed mb-6">
                You're strong like a lioness in the gym and gentle like a kitten with those you love. Here's to another
                year of amazing adventures, purr-fect moments, and achieving all your goals! 🌟
              </p>
              <div className="flex justify-center gap-4 text-3xl">
                <span className="animate-bounce">🎈</span>
                <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>
                  🎁
                </span>
                <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>
                  🎂
                </span>
                <span className="animate-bounce" style={{ animationDelay: "0.6s" }}>
                  🎉
                </span>
                <span className="animate-bounce" style={{ animationDelay: "0.8s" }}>
                  🎈
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
