'use client'
import Link from "next/link";
import {BackgroundGradient} from "@/app/component/ui/background-gradient";

const data = [
    {
        "id": 1,
        "title": "Guitar Fundamentals",
        "slug": "guitar-fundamentals",
        "description": "Learn the basics of playing guitar with our comprehensive beginner's course.",
        "price": 99.99,
        "instructor": "John Doe",
        "isFeatured": true,
        "image": "/courses/guitar.jpg"
    },
    {
        "id": 2,
        "title": "Piano Essentials",
        "slug": "piano-essentials",
        "description": "Master the piano from the ground up with this easy-to-follow course.",
        "price": 89.99,
        "instructor": "Jane Smith",
        "isFeatured": false,
        "image": "/courses/piano.jpg"
    },
    {
        "id": 3,
        "title": "Drumming Basics",
        "slug": "drumming-basics",
        "description": "Start your drumming journey and learn rhythm like a pro.",
        "price": 79.99,
        "instructor": "Mike Johnson",
        "isFeatured": true,
        "image": "/courses/drums.jpg"
    },
    {
        "id": 4,
        "title": "Advanced Guitar Techniques",
        "slug": "advanced-guitar-techniques",
        "description": "Take your guitar skills to the next level with advanced lessons.",
        "price": 129.99,
        "instructor": "John Doe",
        "isFeatured": false,
        "image": "/courses/advanced-guitar.jpg"
    },
    {
        "id": 5,
        "title": "Music Theory 101",
        "slug": "music-theory-101",
        "description": "Understand the language of music in this comprehensive theory course.",
        "price": 59.99,
        "instructor": "Emma Wilson",
        "isFeatured": true,
        "image": "/courses/music-theory.jpg"
    },
    {
        "id": 6,
        "title": "Ukulele for Beginners",
        "slug": "ukulele-for-beginners",
        "description": "A fun and quick way to start playing the ukulele.",
        "price": 49.99,
        "instructor": "Chris Lee",
        "isFeatured": false,
        "image": "/courses/ukulele.jpg"
    },
    {
        "id": 7,
        "title": "Jazz Improvisation",
        "slug": "jazz-improvisation",
        "description": "Learn the art of improvisation with jazz techniques and styles.",
        "price": 109.99,
        "instructor": "Miles Davis Jr.",
        "isFeatured": true,
        "image": "/courses/jazz.jpg"
    },
    {
        "id": 8,
        "title": "Singing for Beginners",
        "slug": "singing-for-beginners",
        "description": "Train your voice and start singing confidently.",
        "price": 69.99,
        "instructor": "Lana Cruz",
        "isFeatured": false,
        "image": "/courses/singing.jpg"
    },
    {
        "id": 9,
        "title": "Electronic Music Production",
        "slug": "electronic-music-production",
        "description": "Produce beats and tracks using modern digital audio tools.",
        "price": 149.99,
        "instructor": "DJ Nova",
        "isFeatured": true,
        "image": "/courses/electronic.jpg"
    },
    {
        "id": 10,
        "title": "Classical Guitar Mastery",
        "slug": "classical-guitar-mastery",
        "description": "Explore the beauty and technique of classical guitar.",
        "price": 119.99,
        "instructor": "Carlos Rivera",
        "isFeatured": false,
        "image": "/courses/classical-guitar.jpg"
    }
]

interface data {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
}

function FeaturedCourses() {

    const featuredCourses = data.filter((data: data) => data.isFeatured)

    return (
        <div className='py-12 bg-gray-900'>
            <div className='text-center'>
                <h2 className='text-base text-teal-600 font-semibold tracking-wide-uppercase'>FEATURED COURSES</h2>
                <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4x'>Learn with sifat</p>
            </div>
            <div className='mt-10'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {featuredCourses.map((data: data) => (
                        <div key={data.id} className="flex justify-center">
                            <BackgroundGradient
                                className="flex flex-col rounded-[22px] dark:bg-zinc-900 overflow-hidden h-full max-w-sm bg-black">
                                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 text-white">{data.title}</p>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400">{data.description}</p>
                                    <Link href={`/courses/${data.slug}`} className="mt-4 text-blue-500 hover:underline">
                                        Learn More
                                    </Link>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>

            </div>
            <div className='mt-20 text-center'>
                <Link href={'/all-courses'} className='text-white pointer'>
                    All Courses
                </Link>
            </div>
        </div>
    );
}

export default FeaturedCourses;