enum Membership {
    Single,
    Standard,
    Premium
}

const membership = Membership.Single;
console.log(membership);

const membershipReverse = Membership[2];
console.log(membershipReverse);

enum SocialMedia {
    VK = 'VK',
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM'
}

const sm  = SocialMedia.INSTAGRAM;
console.log(sm)
