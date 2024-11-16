//
//  _CommonnessRatedAdvantageDisadvantage.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

/// Reference to a commonness-rated advantage or disadvantage. Commonness-rating terms used in the source books are strongly recommended, common, uncommon, suggested and unsuitable.
public struct CommonnessRatedAdvantageDisadvantage<Identifier: EntitySubtype>: EntitySubtype {
    /// The advantage's or disadvantage's identifier.
    public let id: Identifier
}
