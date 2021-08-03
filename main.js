function changeBannerImg() {
    if(/_1.png/.test(document.getElementById("bannerImg").src))
        document.getElementById("bannerImg").src = "banner_2.png"
    else
        document.getElementById("bannerImg").src = "banner_1.png"

    setTimeout(() => {
        changeBannerImg()
    }, 333)
}

changeBannerImg()