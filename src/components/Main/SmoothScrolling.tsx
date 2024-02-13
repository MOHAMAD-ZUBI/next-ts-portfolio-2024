"use client"
import React, { useEffect } from 'react'

type Props = {}

const SmoothScrolling = (props: Props) => {
    useEffect(() => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                    //@ts-ignore
                const target = document.querySelector(this.getAttribute('href'));
                
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }, []);

    return null;
}

export default SmoothScrolling